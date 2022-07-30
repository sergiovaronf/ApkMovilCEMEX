import { RequestDriveNewComponent } from './components/request-drive-new/request-drive-new.component';
import { RequestAdminNewComponent } from './components/request-admin-new/request-admin-new.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewRequestPageRoutingModule } from './new-request-routing.module';

import { NewRequestPage } from './new-request.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewRequestPageRoutingModule
  ],
  declarations: [NewRequestPage,
  RequestAdminNewComponent,
  RequestDriveNewComponent]
})
export class NewRequestPageModule {}
