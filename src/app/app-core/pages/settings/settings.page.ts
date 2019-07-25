import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedTheme: string;

  constructor(private location: Location, private theme: ThemeService) {
  }

  ngOnInit() {
  }

  toggleActiveTheme() {
    this.theme.toggleActiveTheme();
  }
}
