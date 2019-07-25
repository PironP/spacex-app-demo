import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShipsService } from '../services/ships.service';
import { Ship } from '../models/ship.model';

@Injectable({
    providedIn: 'root',
})
export class ShipResolver implements Resolve<Ship> {
    constructor(private shipsService: ShipsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ship> {
        return this.shipsService.getShip(route.paramMap.get('id'));
    }
}
