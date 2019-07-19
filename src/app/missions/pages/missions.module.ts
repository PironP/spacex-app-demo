import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { CoreModule } from '../../app-core/core.module';

import { MissionsPage } from './missions.page';
import { MissionResolver } from '../resolvers/mission.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MissionsPage
      },
      {
        path: ':id',
        loadChildren: './mission-details/mission-details.module#MissionDetailsPageModule',
        resolve: {
          mission: MissionResolver
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
  declarations: [MissionsPage]
})
export class MissionsPageModule { }
