import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";





@NgModule({
  declarations: [
      AuthComponent
  ],
  imports: [
    RouterModule,
    MatCardModule
  ]

})
export class AuthModule { }
