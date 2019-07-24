import { Component, OnInit } from '@angular/core';
import { LandPad } from '../../models/land-pad.model';
import { Observable } from 'rxjs';
import { PadsService } from '../../services/pads.service';
import { LaunchPad } from '../../models/launch-pad.model';

@Component({
  selector: 'app-launch-pads',
  templateUrl: './launch-pads.page.html',
  styleUrls: ['./launch-pads.page.scss'],
})
export class LaunchPadsPage implements OnInit {
  launchPads$: Observable<LaunchPad[]>;

  constructor(private padsService: PadsService) { }

  ngOnInit() {
    this.launchPads$ = this.padsService.getLaunchPads();
  }

  doRefresh(event) {
    this.launchPads$ = this.padsService.getLaunchPads();
    this.launchPads$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }
}
