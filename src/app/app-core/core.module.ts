import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SkeletonLoaderComponent } from './components/skeleton-loader/skeleton-loader.component';
import { LottieLoaderComponent } from './components/lottie-loader/lottie-loader.component';
import { LottieAnimationViewModule } from 'ng-lottie';


@NgModule({
  declarations: [
    SkeletonLoaderComponent,
    LottieLoaderComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    IonicModule,
    LottieAnimationViewModule.forRoot()
  ],
  exports: [
    SkeletonLoaderComponent,
    LottieLoaderComponent
  ]
})
export class CoreModule { }
