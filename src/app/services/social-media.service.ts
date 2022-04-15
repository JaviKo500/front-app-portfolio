import { Injectable } from '@angular/core';
import { SocialMedia } from '../interfaces/socialMedia.interface';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {
  private _socilaMedias: SocialMedia [] = [
    {
      name: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp fa-2xl',
      url: 'https://wa.me/593987535645?text=Hi%20Javier!,%20let%27s%20work%20together'
    },
    {
      name: 'Gmail',
      icon: 'fa-regular fa-envelope fa-2xl',
      url: 'https://mail.google.com/mail/u/0/?fs=1&to=javikogutierrez64@gmail.com&tf=cm'
    },
    {
      name: 'LinKedin',
      icon: 'fa-brands fa-linkedin fa-2xl',
      url: 'https://www.linkedin.com/in/javier-gutierrez-70ba43142'
    },
    {
      name: 'Facebook',
      icon: 'fa-brands fa-facebook fa-2xl',
      url: 'https://www.facebook.com/javier.gutierres.712'
    },
    {
      name: 'Telegram',
      icon: 'fa-brands fa-telegram fa-2xl',
      url: 'https://t.me/Javiko500'
    },
    {
      name: 'Discord',
      icon: 'fa-brands fa-discord fa-2xl',
      url: 'https://discord.gg/nBrcxDaKEN'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram fa-2xl',
      url: 'https://www.instagram.com/javiko500/'
    },
  ];

  get socialMedias(){
    return [...this._socilaMedias];
  }
  constructor() { }
}
