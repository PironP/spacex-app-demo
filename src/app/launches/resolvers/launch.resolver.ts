import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LaunchesService } from '../services/launches.service';
import { Launch } from '../models/launch.model';

@Injectable({
    providedIn: 'root',
})
export class LaunchResolver implements Resolve<Launch> {
    constructor(private launchesService: LaunchesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Launch> {
        return this.launchesService.getLaunch(route.paramMap.get('id'));
    }
}