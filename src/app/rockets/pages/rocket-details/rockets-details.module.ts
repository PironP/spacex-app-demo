import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RocketsDetailsPage } from './rockets-details.page';

const routes: Routes = [
  {
    path: '',
    component: RocketsDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RocketsDetailsPage]
})
export class RocketsDetailsPageModule {}
