import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchThemeComponent } from './switch-theme/switch-theme.component';



@NgModule({
  declarations: [SwitchThemeComponent],
  exports: [
    SwitchThemeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
