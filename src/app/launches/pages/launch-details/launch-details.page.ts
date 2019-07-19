import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Launch } from '../../models/launch.model';
import * as moment from 'moment';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.page.html',
  styleUrls: ['./launch-details.page.scss'],
})
export class LaunchDetailsPage implements OnInit, AfterViewInit {
  launch: Launch;
  missionName: string;
  timeToLaunch: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    this.launch =  this.route.snapshot.data.launch;
    if (this.launch.upcoming) {
      this.timeToLaunch = moment(this.launch.launch_date_local).fromNow();
    }
  }

  ngAfterViewInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
