import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import {MatCardModule} from "@angular/material/card";
import {AuthRoutingModule} from "./auth-routing.module";
import {RegistryModule} from "./registry/registry.module";


@NgModule({
  declarations: [
      AuthComponent
  ],
  imports: [
    MatCardModule,
    AuthRoutingModule,
    RegistryModule
  ]
})
export class AuthModule { }
