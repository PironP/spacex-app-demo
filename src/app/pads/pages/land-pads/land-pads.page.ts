import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandPad } from '../../models/land-pad.model';
import { PadsService } from '../../services/pads.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-land-pads',
  templateUrl: './land-pads.page.html',
  styleUrls: ['./land-pads.page.scss'],
})
export class LandPadsPage implements OnInit {
  landPads$: Observable<LandPad[]>;

  constructor(private padsService: PadsService,
              private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.landPads$ = this.padsService.getLandPads();
  }

  doRefresh(event) {
    this.landPads$ = this.padsService.getLandPads();
    this.landPads$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
