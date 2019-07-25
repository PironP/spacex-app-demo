import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ship } from '../models/ship.model';
import { ShipsService } from '../services/ships.service';

@Component({
  selector: 'app-ships',
  templateUrl: './ships.page.html',
  styleUrls: ['./ships.page.scss'],
})
export class ShipsPage implements OnInit {
  ships$: Observable<Ship[]>;

  constructor(private shipsService: ShipsService) { }

  ngOnInit() {
    this.ships$ = this.shipsService.getShips();
  }

  doRefresh(event) {
    this.ships$ = this.shipsService.getShips();
    this.ships$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }

}
