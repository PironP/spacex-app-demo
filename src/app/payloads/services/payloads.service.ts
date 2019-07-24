import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payload } from '../models/payload.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PayloadsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getPayload(payloadId: string): Observable<Payload> {
    const requestEndpoint = `${this.apiBaseUrl}/payloads/${payloadId}`;
    return this.http.get<Payload>(requestEndpoint).pipe(
      map((payload: Payload) => {
        return payload;
      })
    );
  }

  getPayloads(): Observable<Payload[]> {
    const requestEndpoint = `${this.apiBaseUrl}/payloads`;
    return this.http.get<Payload[]>(requestEndpoint).pipe(
      map((payloads: Payload[]) => {
        return payloads;
      })
    );
  }
}
