import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _linkThemeCss = document.getElementById('theme');
  constructor() {

  }

  changeTheme = (isDarkTheme: boolean): void => {
    let theme: string;
    if ( isDarkTheme ) {
      theme = 'dark';
    } else {
      theme = 'ligth';
    }
    const baseCss = `./assets/css/${theme}.css`;
    console.log(baseCss);
    
    this._linkThemeCss?.setAttribute('href', baseCss);
  }
}
