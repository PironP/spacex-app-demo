import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(
    private location: Location,
    private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
