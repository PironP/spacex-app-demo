import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Rocket } from '../models/rocket.model';
import { RocketsService } from '../services/rockets.service';

@Injectable({
    providedIn: 'root',
})
export class RocketResolver implements Resolve<Rocket> {
    constructor(private rocketsService: RocketsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Rocket> {
        return this.rocketsService.getRocket(route.paramMap.get('id'));
    }
}
