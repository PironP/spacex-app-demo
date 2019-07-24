import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Rocket } from '../models/rocket.model';


@Injectable({
  providedIn: 'root'
})
export class RocketsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getRocket(rocketId: string): Observable<Rocket> {
    const requestEndpoint = `${this.apiBaseUrl}/rockets/${rocketId}`;
    return this.http.get<Rocket>(requestEndpoint).pipe(
      map((rocket: Rocket) => {
        return rocket;
      })
    );
  }

  getRockets(): Observable<Rocket[]> {
    const requestEndpoint = `${this.apiBaseUrl}/rockets`;
    return this.http.get<Rocket[]>(requestEndpoint).pipe(
      map((rockets: Rocket[]) => {
        return rockets;
      })
    );
  }
}
