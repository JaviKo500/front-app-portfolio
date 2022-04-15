import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchThemeComponent } from './switch-theme/switch-theme.component';
import { FormsModule } from '@angular/forms';
import { SkillComponent } from './skill/skill.component';
import { InterestComponent } from './interest/interest.component';
import { AptitudesComponent } from './aptitudes/aptitudes.component';
import { SocialMediaComponent } from './social-media/social-media.component';



@NgModule({
  declarations: [SwitchThemeComponent, SkillComponent, InterestComponent, AptitudesComponent, SocialMediaComponent],
  exports: [
    AptitudesComponent,
    InterestComponent,
    SkillComponent,
    SocialMediaComponent,
    SwitchThemeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
