import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DragonsPage } from './dragons.page';
import { CoreModule } from '../../app-core/core.module';
import { DragonDetailsPage } from './dragon-details/dragon-details.page';

const routes: Routes = [
  {
    path: '',
    component: DragonsPage
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
  entryComponents: [DragonDetailsPage],
  declarations: [DragonsPage, DragonDetailsPage]
})
export class DragonsPageModule {}
