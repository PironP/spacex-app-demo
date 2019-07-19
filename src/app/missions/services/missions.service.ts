import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class MissionsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getMission(missionId: string): Observable<Mission> {
    const requestEndpoint = `${this.apiBaseUrl}/missions/${missionId}`;
    return this.http.get<Mission>(requestEndpoint).pipe(
      map((mission: Mission) => {
        return mission;
      })
    );
  }

  getMissions(): Observable<Mission[]> {
    const requestEndpoint = `${this.apiBaseUrl}/missions`;
    return this.http.get<Mission[]>(requestEndpoint).pipe(
      map((missions: Mission[]) => {
        return missions;
      })
    );
  }
}
