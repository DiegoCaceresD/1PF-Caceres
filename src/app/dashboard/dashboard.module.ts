import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {MatButtonModule} from "@angular/material/button";
import {AlumnsListModule} from "../pages/alumns-list/alumns-list.module";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {CursosListModule} from "../pages/cursos-list/cursos-list.module";


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    ToolbarModule,
    MatButtonModule,
    AlumnsListModule,
    RouterModule,
    MatListModule,
    CursosListModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
