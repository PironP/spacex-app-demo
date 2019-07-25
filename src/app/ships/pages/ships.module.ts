import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShipsPage } from './ships.page';
import { CoreModule } from 'src/app/app-core/core.module';
import { ShipResolver } from '../resolvers/ship.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ShipsPage
      },
      {
        path: ':id',
        loadChildren: './ship-details/ship-details.module#ShipDetailsPageModule',
        resolve: {
          ship: ShipResolver
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
  declarations: [ShipsPage]
})
export class ShipsPageModule {}
