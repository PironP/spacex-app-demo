import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dragon } from '../models/dragon.models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getDragons(): Observable<Dragon[]> {
    const requestEndpoint = `${this.apiBaseUrl}/dragons`;
    return this.http.get<Dragon[]>(requestEndpoint).pipe(
      map((dragons: Dragon[]) => {
        return dragons;
      })
    );
  }
}
