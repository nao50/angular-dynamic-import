import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YellowComponent } from './yellow.component';
export { YellowComponent as component };

@NgModule({
  declarations: [
    YellowComponent
  ],
  imports: [
    CommonModule
  ]
})
export class YellowModule { }
