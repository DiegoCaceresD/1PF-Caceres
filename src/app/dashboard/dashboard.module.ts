import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {ToolbarModule} from "./toolbar/toolbar.module";
import {MatButtonModule} from "@angular/material/button";
import {AlumnsListModule} from "../pages/alumns-list/alumns-list.module";
import {RouterModule, Routes} from "@angular/router";
import {MatListModule} from "@angular/material/list";
import {CursosListModule} from "../pages/cursos-list/cursos-list.module";
import {AlumnsListComponent} from "../pages/alumns-list/alumns-list.component";
import {AlumnoDetalleComponent} from "../pages/alumns-list/alumno-detalle/alumno-detalle.component";
import {CursosListComponent} from "../pages/cursos-list/cursos-list.component";
import {CursoDetalleComponent} from "../pages/cursos-list/curso-detalle/curso-detalle.component";

// const routes:Routes =
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
        }
    ])
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
