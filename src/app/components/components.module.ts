import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchThemeComponent } from './switch-theme/switch-theme.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SwitchThemeComponent],
  exports: [
    SwitchThemeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
