import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Observable } from 'rxjs';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  companyInfo$: Observable<Company>;

  constructor(
    private companyService: CompanyService,
    private location: Location,
    private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.companyInfo$ = this.companyService.getCompanyInfo();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
