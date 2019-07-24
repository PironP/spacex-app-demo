import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Payload } from '../../models/payload.model';
import { ActivatedRoute } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-payload-details',
  templateUrl: './payload-details.page.html',
  styleUrls: ['./payload-details.page.scss'],
})
export class PayloadDetailsPage implements OnInit {
  payload: Payload;

  constructor(
    private route: ActivatedRoute,
    private inAppBrowser: InAppBrowser,
    private location: Location) { }

  ngOnInit() {
    this.payload = this.route.snapshot.data.payload;
    // console.log(this.payload);
  }

  goBack() {
    this.location.back();
  }

}
