import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PayloadsPage } from './payloads.page';
import { PayloadResolver } from '../resolver/payload.resolver';
import { CoreModule } from 'src/app/app-core/core.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PayloadsPage
      },
      {
        path: ':id',
        loadChildren: './payload-details/payload-details.module#PayloadDetailsPageModule',
        resolve: {
          payload: PayloadResolver
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
  declarations: [PayloadsPage]
})
export class PayloadsPageModule {}
