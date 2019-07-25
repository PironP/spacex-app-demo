import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Core } from '../models/core.model';

@Injectable({
  providedIn: 'root'
})
export class CoresService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getAllCores(): Observable<Core[]> {
    const requestEndpoint = `${this.apiBaseUrl}/cores`;
    return this.http.get<Core[]>(requestEndpoint).pipe(
      map((cores: Core[]) => {
        return cores;
      })
    );
  }

  getPastCores(): Observable<Core[]> {
    const requestEndpoint = `${this.apiBaseUrl}/cores/past`;
    return this.http.get<Core[]>(requestEndpoint).pipe(
      map((cores: Core[]) => {
        return cores;
      })
    );
  }

  getUpcomingCores(): Observable<Core[]> {
    const requestEndpoint = `${this.apiBaseUrl}/cores/upcoming`;
    return this.http.get<Core[]>(requestEndpoint).pipe(
      map((cores: Core[]) => {
        return cores;
      })
    );
  }

  getCore(coreSerial: string): Observable<Core[]> {
    const requestEndpoint = `${this.apiBaseUrl}/cores/${coreSerial}`;
    return this.http.get<Core[]>(requestEndpoint).pipe(
      map((cores: Core[]) => {
        return cores;
      })
    );
  }
}
