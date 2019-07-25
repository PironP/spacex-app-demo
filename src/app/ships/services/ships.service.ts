import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ship } from '../models/ship.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getShip(shipId: string): Observable<Ship> {
    const requestEndpoint = `${this.apiBaseUrl}/ships/${shipId}`;
    return this.http.get<Ship>(requestEndpoint).pipe(
      map((ship: Ship) => {
        return ship;
      })
    );
  }

  getShips(): Observable<Ship[]> {
    const requestEndpoint = `${this.apiBaseUrl}/ships`;
    return this.http.get<Ship[]>(requestEndpoint).pipe(
      map((ships: Ship[]) => {
        return ships;
      })
    );
  }
}
