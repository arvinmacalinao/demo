import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilipinoFoodPageRoutingModule } from './filipino-food-routing.module';

import { FilipinoFoodPage } from './filipino-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilipinoFoodPageRoutingModule
  ],
  declarations: [FilipinoFoodPage]
})
export class FilipinoFoodPageModule {}
