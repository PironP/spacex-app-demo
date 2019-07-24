import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LaunchesService } from '../../services/launches.service';
import { Launch } from '../../models/launch.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-past-launches',
  templateUrl: './past-launches.page.html',
  styleUrls: ['./past-launches.page.scss'],
})
export class PastLaunchesPage implements OnInit, AfterViewInit {
  pastLaunches$: Observable<Launch[]>;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.pastLaunches$ = this.launchesService.getPastLaunches();
  }

  doRefresh(event) {
    this.pastLaunches$ = this.launchesService.getPastLaunches();
    this.pastLaunches$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }
}
