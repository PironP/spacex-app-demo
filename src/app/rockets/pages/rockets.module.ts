import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CoreModule } from '../../app-core/core.module';

import { RocketsPage } from './rockets.page';
import { RocketResolver } from '../resolver/rocket.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: RocketsPage
      },
      {
        path: ':id',
        loadChildren: './rocket-details/rocket-details.module#RocketsDetailsPageModule',
        resolve: {
          rocket: RocketResolver
        }
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoreModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RocketsPage]
})
export class RocketsPageModule {}
