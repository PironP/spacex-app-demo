import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PayloadsService } from '../services/payloads.service';
import { Payload } from '../models/payload.model';

@Injectable({
    providedIn: 'root',
})
export class PayloadResolver implements Resolve<Payload> {
    constructor(private payloadsService: PayloadsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Payload> {
        return this.payloadsService.getPayload(route.paramMap.get('id'));
    }
}
