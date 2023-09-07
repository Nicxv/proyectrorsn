import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { Componente1Component } from '../components/componente1/componente1.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage,Componente1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePageModule {}
