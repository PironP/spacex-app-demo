import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getCompanyInfo(): Observable<Company> {
    const requestEndpoint = `${this.apiBaseUrl}/info`;
    return this.http.get<Company>(requestEndpoint).pipe(
      map((companyInfo: Company) => {
        return companyInfo;
      })
    );
  }
}
