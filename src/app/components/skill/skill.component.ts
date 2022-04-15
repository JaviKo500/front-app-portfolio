import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../interfaces/skills.interface';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  public skills: Skill [] = [];
  constructor(
    private _skillService: SkillService
  ) { }

  ngOnInit(): void {
    this.skills = this._skillService.skills;
  }

}
