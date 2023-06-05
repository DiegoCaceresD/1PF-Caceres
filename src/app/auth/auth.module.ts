import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import {MatCardModule} from "@angular/material/card";
import {AuthRoutingModule} from "./auth-routing.module";
import {RegistryModule} from "./registry/registry.module";
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
      AuthComponent
  ],
  imports: [
    MatCardModule,
    AuthRoutingModule,
    RegistryModule,
    MatSnackBarModule
  ]
})
export class AuthModule { }
