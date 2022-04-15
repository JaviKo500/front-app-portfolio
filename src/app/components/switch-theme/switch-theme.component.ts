import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-switch-theme',
  templateUrl: './switch-theme.component.html',
  styleUrls: ['./switch-theme.component.css']
})
export class SwitchThemeComponent implements OnInit {
  public isDarkTheme: boolean = true;
  constructor( private _settingsService: SettingsService) { }

  ngOnInit(): void {
    this.changeTheme();
  }

  changeTheme = (): void => {
    this._settingsService.changeTheme(this.isDarkTheme);
  }

}
