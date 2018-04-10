import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings.service';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})


export class SettingsPage {
  /* injection du service dans le constructeur */
  constructor(private settingsService: SettingsService) { }

  onToggle(toggle: Toggle) {
    this.settingsService.setBackground(toggle.checked);
    console.log(toggle);
  }

  checkAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
