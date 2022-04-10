import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [NavBarComponent, FooterComponent],
  exports: [
    FooterComponent,
    NavBarComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class SharedModule { }
