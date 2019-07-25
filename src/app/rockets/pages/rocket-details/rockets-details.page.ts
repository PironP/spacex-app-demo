import { Component, OnInit } from '@angular/core';
import { Rocket } from '../../models/rocket.model';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Location } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';

@Component({
  selector: 'app-rockets-details',
  templateUrl: './rockets-details.page.html',
  styleUrls: ['./rockets-details.page.scss'],
})
export class RocketsDetailsPage implements OnInit {
  rocket: Rocket;

  sliderOpts = {
    zoom: false,
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true
  };

  constructor(
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser,
    private location: Location,
    private modalController: ModalController) { }

  ngOnInit() {
    this.rocket = this.route.snapshot.data.rocket;
  }

  goBack() {
    this.location.back();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
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
