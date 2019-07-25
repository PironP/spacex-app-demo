import { Component, OnInit, Input } from '@angular/core';
import { Dragon } from '../../models/dragon.models';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.page.html',
  styleUrls: ['./dragon-details.page.scss'],
})
export class DragonDetailsPage implements OnInit {
  dragon: Dragon;
  test: string;

  constructor(
    private modalCtrl: ModalController,
    navParams: NavParams) {
    this.dragon = navParams.get('dragon');
  }

  ngOnInit() {
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
