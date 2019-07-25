import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private storage: Storage,
  ) {
  }

  initActiveTheme(darkMode: boolean) {
    if (darkMode) {
      this.document.body.classList.add('dark-mode');
    }
  }

  toggleActiveTheme() {
    if (this.document.body.classList.contains('dark-mode')) {
      this.document.body.classList.remove('dark-mode');
      this.storage.set('dark-mode', false);
    } else {
      this.document.body.classList.add('dark-mode');
      this.storage.set('dark-mode', true);
    }
  }
}
