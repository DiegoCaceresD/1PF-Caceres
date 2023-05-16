import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegistryComponent} from "./registry/registry.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'registry',
        component: RegistryComponent,
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
