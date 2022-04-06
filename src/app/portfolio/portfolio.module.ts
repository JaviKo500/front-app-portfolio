import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';

import { SharedModule } from '../shared/shared.module';

import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './portfolio.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { SkillsComponent } from './pages/skills/skills.component';


@NgModule({
  declarations: [HomeComponent, PortfolioComponent, AboutMeComponent, ProjectsComponent, ContactMeComponent, SkillsComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    SharedModule
  ]
})
export class PortfolioModule { }
