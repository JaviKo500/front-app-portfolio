import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Aptitudes } from '../../interfaces/interest_aptitud.interface';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent implements OnInit {

  public aptitudes: Aptitudes [] = [];
  constructor(
    private _skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.aptitudes = this._skillService.aptitudes;
  }

}
