import { Component, OnInit } from '@angular/core';
import { Rocket } from '../../models/rocket.model';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rockets-details',
  templateUrl: './rockets-details.page.html',
  styleUrls: ['./rockets-details.page.scss'],
})
export class RocketsDetailsPage implements OnInit {
  rocket: Rocket;

  constructor(
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser,
    private location: Location) { }

  ngOnInit() {
    this.rocket = this.route.snapshot.data.rocket;
  }

  goBack() {
    this.location.back();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
