import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload } from '../models/payload.model';
import { PayloadsService } from '../services/payloads.service';

@Component({
  selector: 'app-payloads',
  templateUrl: './payloads.page.html',
  styleUrls: ['./payloads.page.scss'],
})
export class PayloadsPage implements OnInit {
  payloads$: Observable<Payload[]>;

  constructor(private payloadsService: PayloadsService) { }

  ngOnInit() {
    this.payloads$ = this.payloadsService.getPayloads();
  }

  doRefresh(event) {
    this.payloads$ = this.payloadsService.getPayloads();
    this.payloads$.toPromise()
      .then(() => { if (event) { event.target.complete(); } });
  }
}
