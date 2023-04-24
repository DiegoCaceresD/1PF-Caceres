import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorsHelperComponent} from "./errors-helper.component";



@NgModule({
  declarations: [
    ErrorsHelperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorsHelperComponent
  ]
})
export class ErrorsHelperModule { }
