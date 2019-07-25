import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Dragon } from '../models/dragon.models';
import { DragonsService } from '../services/dragons.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.page.html',
  styleUrls: ['./dragons.page.scss'],
})
export class DragonsPage implements OnInit {
  dragons$: Observable<Dragon[]>;

  constructor(
    private dragonsService: DragonsService,
    private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.dragons$ = this.dragonsService.getDragons();
  }

  doRefresh(event) {
    this.dragons$ = this.dragonsService.getDragons();
    this.dragons$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }

}
