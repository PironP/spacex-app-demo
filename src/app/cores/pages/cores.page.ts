import { Component, OnInit } from '@angular/core';
import { CoresService } from '../services/cores.service';
import { Observable, concat } from 'rxjs';
import { Core, Status } from '../models/core.model';
import { NavigationExtras, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cores',
  templateUrl: './cores.page.html',
  styleUrls: ['./cores.page.scss'],
})
export class CoresPage implements OnInit {
  segementValue = 'ALL';
  sortChecked: boolean;

  cores$: Observable<Core[]>;
  allCores$: Observable<Core[]>;
  pastCores$: Observable<Core[]>;
  upcomingCores$: Observable<Core[]>;


  constructor(
    private router: Router,
    private coresService: CoresService) { }

  ngOnInit() {
    this.pastCores$ = this.coresService.getPastCores();
    this.upcomingCores$ = this.coresService.getUpcomingCores();
    this.allCores$ = this.coresService.getAllCores();
    this.cores$ = this.allCores$;
  }

  segmentChanged(ev: any) {
    switch (this.segementValue) {
      case 'ALL':
        this.sortChecked = false;
        this.cores$ = this.allCores$;
        break;
      case 'PAST':
        this.sortChecked = false;
        this.cores$ = this.pastCores$;
        break;
      case 'UPCOMING':
        this.sortChecked = false;
        this.cores$ = this.upcomingCores$;
        break;
    }
  }

  doRefresh(event: any) {
    switch (this.segementValue) {
      case 'ALL':
        this.sortChecked = false;
        this.allCores$ = this.coresService.getAllCores();
        this.cores$ = this.allCores$;
        break;
      case 'PAST':
        this.sortChecked = false;
        this.pastCores$ = this.coresService.getPastCores();
        this.cores$ = this.pastCores$;
        break;
      case 'UPCOMING':
        this.sortChecked = false;
        this.upcomingCores$ = this.coresService.getUpcomingCores();
        this.cores$ = this.upcomingCores$;
        break;
    }
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  sort(event: any) {
    if (event.detail.checked) {
      this.orderByStatus();
    } else {
      this.orderByDateTimeUnix();
    }
  }

  goToCoreDetails(core: Core) {
    const navigationExtras: NavigationExtras = {
      state: {
        core
      }
    };
    this.router.navigate([`cores/${core.core_serial}`], navigationExtras);
  }

  private orderByStatus() {
    this.cores$ = this.cores$.pipe(
      map((cores: Core[]) => {
        const order = ['active', 'lost', 'inactive', 'unknown'];
        const sorted = cores.sort((a, b) => {
          if (order.indexOf(a.status) > order.indexOf(b.status)) {
            return 1;
          }
          if (order.indexOf(a.status) < order.indexOf(b.status)) {
            return -1;
          }
          return 0;
        });
        return sorted;
      })
    );
  }

  private orderByDateTimeUnix() {
    this.cores$ = this.cores$.pipe(
      map((cores: Core[]) => {
        const sorted = cores.sort((a, b) => {
          if (a.original_launch_unix > b.original_launch_unix) {
            return 1;
          }
          if (a.original_launch_unix < b.original_launch_unix) {
            return -1;
          }
          return 0;
        });
        return sorted;
      })
    );
  }
}
