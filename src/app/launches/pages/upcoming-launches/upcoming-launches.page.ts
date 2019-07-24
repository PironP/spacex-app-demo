import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../../models/launch.model';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-upcoming-launches',
  templateUrl: './upcoming-launches.page.html',
  styleUrls: ['./upcoming-launches.page.scss'],
})
export class UpcomingLaunchesPage implements OnInit, AfterViewInit {
  upcomingLaunches$: Observable<Launch[]>;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.upcomingLaunches$ = this.launchesService.getUpcomingLaunches();
  }

  doRefresh(event) {
    this.upcomingLaunches$ = this.launchesService.getUpcomingLaunches();
    this.upcomingLaunches$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }
}
