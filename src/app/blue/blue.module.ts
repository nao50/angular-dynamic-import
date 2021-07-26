import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlueComponent } from './blue.component';
export { BlueComponent as component };

@NgModule({
  declarations: [
    BlueComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlueComponent
  ]
})
export class BlueModule { }
