import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/services/travels/travel.service';
import { ApiService } from '../../../../services/auth/api.service';
import { Travel } from '../../../../interfaces/travels/travel';
import { DOCUMENT } from '@angular/common';
import { TextResponseService } from '../../../../services/text-response.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.scss'],
})
export class HomeUserComponent implements OnInit {

  @Output()
  propagar = new EventEmitter<boolean>();

  travelId : string;
  travelStatuss : number;

  linkClever = "https://cemex.sercae.com/sercae/pages/core/login.jsf";
  linkTrip = "https://tuviajecx.com/cemexterceros/login"

  constructor(
    private navCtrl : NavController,
    private travelService : TravelService,
    private apiService : ApiService,
    public textResp : TextResponseService,
    @Inject(DOCUMENT) private document: Document
    ) { }

  async ngOnInit() {
    this.propagar.emit(true);
    await this.getId();
  }

  async getId() {
    const data = await this.travelService.getFilterTravelByIdDriver(this.apiService.userProfile.UserId).toPromise();
    let list: Travel[] = data.data.filter(data => data.StatusTravelAvailability === 2 || data.StatusTravelAvailability === 3 || data.StatusTravelAvailability === 4 || data.StatusTravelAvailability === 5);
    if (list.length !== 0) {
      this.travelId = list[0].codeTravel;
      this.travelStatuss = list[0].StatusTravelAvailability;
    } else {
      this.travelId = null;
    }
    this.propagar.emit(false);
  }

  onUrl(url : string){
    const link = this.document.createElement('a');
    link.target = '_blank';
    link.href = url;
    link.rel = "noopener"
    link.click();
    link.remove();
  }

  onClickTravel(){
    this.navCtrl.navigateRoot(['/app/travels'])
  }

  onClickMyTravel(){
    this.navCtrl.navigateRoot(['/app/my-travels'])
  }

}
