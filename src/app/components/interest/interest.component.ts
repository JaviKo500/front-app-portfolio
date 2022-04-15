import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Interest } from '../../interfaces/interest_aptitud.interface';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  public interests: Interest [] = [];
  constructor(
    private _skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.interests = this._skillService.interests;
  }

  getClass = (num: number) => {
    if ( num % 2 == 0) {
      return 'interest-par';
    } else {
      return 'interest-impar';
    }
  }

}
