import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage';
import { ThemeService } from './app-core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  selectedPath: string;
  text: any = {
    Year: 'Y',
    Month: 'M',
    Weeks: 'W',
    Days: 'D',
    Hours: 'H',
    Minutes: 'M',
    Seconds: 'S',
    MilliSeconds: 'MilliSeconds'
  };
  public pages = [
    {
      title: 'Launches',
      url: '/launches/next',
    },
    {
      title: 'Missions',
      url: '/missions',
    },
    {
      title: 'Rockets',
      url: '/rockets',
    },
    {
      title: 'Payloads',
      url: '/payloads',
    },
    {
      title: 'Cores',
      url: '/cores',
    },
    {
      title: 'Pads',
      url: '/pads',
    },
    {
      title: 'History',
      url: '/history',
    },
    {
      title: 'Ships',
      url: '/ships',
    },
    {
      title: 'Dragons',
      url: '/dragons',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private storage: Storage,
    private theme: ThemeService
  ) {
    this.initializeApp();

    storage.get('dark-mode').then(darkMode => {
      theme.initActiveTheme(darkMode);
    });
  }

  private initializeApp() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
