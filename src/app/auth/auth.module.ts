import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth-routing.module";


@NgModule({
  declarations: [
      AuthComponent
  ],
  imports: [
    MatCardModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
