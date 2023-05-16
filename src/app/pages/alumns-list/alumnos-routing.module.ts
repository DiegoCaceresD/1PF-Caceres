import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AlumnsListComponent} from "./alumns-list.component";
import {AlumnoDetalleComponent} from "./alumno-detalle/alumno-detalle.component";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
      path: '',
      component: AlumnsListComponent
    },
      {
        path:':id',
        component: AlumnoDetalleComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AlumnosRoutingModule { }
