import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule, Routes} from "@angular/router";
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
    MatListModule,
    RouterModule.forChild([
        {
          path: 'alumnos',
          loadChildren: ()=> import('../pages/alumns-list/alumns-list.module').then((m)=>m.AlumnsListModule)
        },
        {
          path:'cursos',
          loadChildren: ()=> import('../pages/cursos-list/cursos-list.module').then((m)=>m.CursosListModule)
        },
        {
          path:'inscripciones',
          loadChildren: ()=> import('../pages/inscripciones/inscripciones.module').then((m)=>m.InscripcionesModule)
        }
    ])
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
