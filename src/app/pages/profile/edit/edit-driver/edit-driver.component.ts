import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { ErrorMessagesService } from '../../../../services/error-messages.service';
import { AdminLogistService } from '../../../../services/adminLogist/admin-logist.service';
import { Companies } from '../../../../interfaces/companies/companies';
import { LoginService } from '../../../../services/auth/login.service';
import { Profile } from 'src/app/models/profile.model';
import { NavController } from '@ionic/angular';
import { ApiService } from '../../../../services/auth/api.service';
import { UserDetail } from '../../../../models/user-detail.model';
import { ValidateUserFieldService } from '../../../../services/error/validate-user-field.service';
import { DriversService } from '../../../../services/drivers.service';
import { Location } from '@angular/common';
import { UserService } from '../../../../services/user.service';
import { NotificationsService } from 'src/app/services/notifications/notifications.service';
import { Device } from '@capacitor/device';

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss'],
})
export class EditDriverComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();

  form: FormGroup;
  data: FormData = new FormData();
  profile: UserDetail = new UserDetail();
  company: string = '';
  previusMail: string;

  alertSucces = false;
  alertConfirm = false;
  addIdentityCard = false;
  addDocumentCompany = false;
  toastMessage = '';

  errors: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private errorMessages: ErrorMessagesService,
    private apiService: ApiService,
    public msgField: ValidateUserFieldService,
    private userService: UserService,
    private location: Location,
    private notiService: NotificationsService
  ) {
    this.profile = apiService.userProfile;
    this.company = apiService.userProfile.CompanyName;
    this.previusMail = apiService.userProfile.Email;
    this.formBuilderInput(apiService.userProfile.CompanyId);
  }

  ngOnInit() {
  }

  formBuilderInput(id: number) {
    this.form = this.formBuilder.group({
      RolesId: [this.profile.RolesId, [Validators.required]],
      FirstName: [this.profile.FirstName, [Validators.required]],
      LastName: [this.profile.LastName, [Validators.required]],
      PhoneNumber: [this.profile.PhoneNumber, [Validators.required]],
      CodeSap: [this.profile.CodeSap, [Validators.required]],
      IdDocument: [this.profile.IdDocument, [Validators.required]],
      Email: [this.profile.Email, [Validators.required]],
      CompanyId: [id, [Validators.required]],
      Status: [this.profile.Status, [Validators.required]],
      UserId: [this.profile.UserId],
      policiesPermission: [this.profile.policiesPermission],
      term: [true, [Validators.requiredTrue]]
    });
  }


  async updateData() {
    this.errors = [];
    this.alertConfirm = false;
    if (this.form.invalid) {
      return;
    }
    this.propagar.emit(true);
    await this.addFormData(this.form.value);
    this.userService.updateUser(this.data).subscribe({
      next: (result: any) => {
        if (result.data.message !== 'Updated') {
          this.errors = this.errorMessages.parsearErroresAPI(['Error, al actualizar el susuario.']);
          this.data = new FormData();
        } else {
          this.errors = [];
        }
      },
      error: (err) => {
        this.errors = this.errorMessages.parsearErroresAPI(err.data);
      },
      complete: async () => {
        await this.sendNotification([(await Device.getId()).uuid]);
      }
    });
  }

  async addFormData(objeto) {
    for (var key in objeto) {
      if (key !== 'term') {
        this.data.append(key, objeto[key]);
      }
    }
  }

  sendNotification(data: string[]) {
    return new Promise<boolean>(async (resolve, reject) => {
      this.notiService.notificationData.params.Uuids = await this.notiService.transformDataNotification(data);
      this.notiService.sendNotificationMobileBtc(this.notiService.notificationData).subscribe({
        next: (data) => {
          resolve(true);
        },
        error: (err) => {
          resolve(false);
        },
        complete: () => {
          this.propagar.emit(false);
          this.alertConfirm = false;
          this.alertSucces = true;
          setTimeout(() => {
            this.alertSucces = false;
            this.onBack();
          }, 3000);
        }
      });
    });
  }

  openAlertConfirm() {
    if (this.form.invalid) {
      return;
    }
    this.alertConfirm = true;
  }

  closeAlertConfirm() {
    this.alertConfirm = false;
  }

  onBack() {
    this.location.back();
  }

}
