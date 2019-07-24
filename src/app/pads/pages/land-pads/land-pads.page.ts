import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LandPad } from '../../models/land-pad.model';
import { PadsService } from '../../services/pads.service';

@Component({
  selector: 'app-land-pads',
  templateUrl: './land-pads.page.html',
  styleUrls: ['./land-pads.page.scss'],
})
export class LandPadsPage implements OnInit {

  constructor(private padsService: PadsService) { }

  ngOnInit() {
  }


  doRefresh(event) {
    // this.launchPads$ = this.padsService.getLaunchPads();
    // this.launchPads$.toPromise()
    //   .then(() => { if (event) { event.target.complete(); } });
  }
}
