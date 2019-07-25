import { Component, OnInit, Input } from '@angular/core';
import { Dragon } from '../../models/dragon.models';
import { ModalController, NavParams } from '@ionic/angular';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.page.html',
  styleUrls: ['./dragon-details.page.scss'],
})
export class DragonDetailsPage implements OnInit {
  dragon: Dragon;

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(
    private modalCtrl: ModalController,
    navParams: NavParams,
    private modalController: ModalController) {
    this.dragon = navParams.get('dragon');
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {img}
    }).then(modal => {
      modal.present();
    });
  }
}
