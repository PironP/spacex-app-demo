import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  selectedTheme: string;

  constructor(
    private location: Location,
    public toastController: ToastController,
    private theme: ThemeService) {
  }

  ngOnInit() {
  }

  toggleActiveTheme() {
    this.theme.toggleActiveTheme();
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Theme changed',
      duration: 2000
    });
    toast.present();
  }
}
