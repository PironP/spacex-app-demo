import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Core } from 'src/app/launches/models/launch.model';

@Component({
  selector: 'app-core-details',
  templateUrl: './core-details.page.html',
  styleUrls: ['./core-details.page.scss'],
})
export class CoreDetailsPage implements OnInit {
  core: Core;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.core = this.router.getCurrentNavigation().extras.state.core;
      } else {
        this.goBack();
      }
    });
  }

  ngOnInit() {
  }

  goBack() {
    this.location.back();
  }
}
