import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Launch } from '../models/launch.model';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getLaunch(flightNumber: string): Observable<Launch> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/${flightNumber}`;
    return this.http.get<Launch>(requestEndpoint).pipe(
      map((launch: Launch) => {
        return launch;
      })
    );
  }

  getPastLaunches(): Observable<Launch[]> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/past?order=desc`;
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map((launches: Launch[]) => {
        return launches;
      })
    );
  }

  getNextLaunch(): Observable<Launch> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/next`;
    return this.http.get<Launch>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }

  getUpcomingLaunches(): Observable<Launch[]> {
    const requestEndpoint = `${this.apiBaseUrl}/launches/upcoming?order=asc`;
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }
}
