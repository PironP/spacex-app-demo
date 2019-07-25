import { Component, OnInit } from '@angular/core';
import { Ship } from '../../models/ship.model';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-ship-details',
  templateUrl: './ship-details.page.html',
  styleUrls: ['./ship-details.page.scss'],
})
export class ShipDetailsPage implements OnInit {
  ship: Ship;

  constructor(
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser,
    private location: Location) {
  }

  ngOnInit() {
    this.ship =  this.route.snapshot.data.ship;
  }

  goBack() {
    this.location.back();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
