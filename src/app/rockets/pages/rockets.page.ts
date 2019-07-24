import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Rocket } from '../models/rocket.model';
import { RocketsService } from '../services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.page.html',
  styleUrls: ['./rockets.page.scss'],
})
export class RocketsPage implements OnInit {
  rockets$: Observable<Rocket[]>;

  constructor(private rocketsService: RocketsService) { }

  ngOnInit() {
    this.rockets$ = this.rocketsService.getRockets();
    // this.rockets$.toPromise()
    //   .then(rockets => {
    //     console.log(rockets);
    //   });
  }

  doRefresh(event) {
    this.rockets$ = this.rocketsService.getRockets();
    this.rockets$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }

}
