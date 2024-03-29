import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiclesPageRoutingModule } from './vehicles-routing.module';

import { VehiclesPage } from './vehicles.page';
import { ComponentsModule } from '../../components/components.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { LayoutPageModule } from '../layout/layout.module';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { ListVechicleFilterPipe } from './pipe/list-vechicle-filter.pipe';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    IonicModule,
    VehiclesPageRoutingModule,
    ComponentsModule,
    CmxWebComponentsModule.forRoot(),
    ReactiveFormsModule,
    LayoutPageModule
  ],
  declarations: [
    VehiclesPage,
    VehicleListComponent,
    ListVechicleFilterPipe
  ]
})
export class VehiclesPageModule {}
