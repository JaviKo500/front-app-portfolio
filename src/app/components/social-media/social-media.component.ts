import { Component, OnInit } from '@angular/core';
import { SocialMediaService } from '../../services/social-media.service';
import { SocialMedia } from '../../interfaces/socialMedia.interface';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.css']
})
export class SocialMediaComponent implements OnInit {

  public socialMedias: SocialMedia [] = [];

  constructor(
    private _socialMediaService: SocialMediaService 
  ) { }

  ngOnInit(): void {
    this.socialMedias = this._socialMediaService.socialMedias;
  }

  getClass = (num: number) => {
    if ( num % 2 == 0) {
      return 'interest-par';
    } else {
      return 'interest-impar';
    }
  }

  openNewTab = ( url: string ) => {
    window.open(url, '_blank')
    window.focus();
  }

}
