import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ToolbarModule} from "../shared/toolbar/toolbar.module";
import {MatButtonModule} from "@angular/material/button";
import {AlumnsListModule} from "../pages/alumns-list/alumns-list.module";
import {RouterModule} from "@angular/router";
import {MatListModule} from "@angular/material/list";


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
    MatListModule
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
