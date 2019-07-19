import { Component, OnInit } from '@angular/core';
import { Mission } from '../models/mission.model';
import { Observable } from 'rxjs';
import { MissionsService } from '../services/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {
  missions$: Observable<Mission[]>;

  constructor(private missionsService: MissionsService) { }

  ngOnInit() {
    this.missions$ = this.missionsService.getMissions();
    this.missions$.toPromise()
      .then(missions => {
        console.log(missions);
      });
  }

}
