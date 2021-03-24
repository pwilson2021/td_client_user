import { NgModule } from '@angular/core';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { PlusCircleFill } from 'ng-bootstrap-icons/icons';
import { CommonModule } from '@angular/common';

const icons = {
  PlusCircleFill
};

@NgModule({
  declarations: [],
  imports: [
    BootstrapIconsModule.pick(icons),
    CommonModule
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }
