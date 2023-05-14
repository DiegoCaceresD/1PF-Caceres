import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {CursosListComponent} from "./cursos-list.component";
import {CursoDetalleComponent} from "./curso-detalle/curso-detalle.component";



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CursosListComponent
      },
      {
        path: ':id',
        component: CursoDetalleComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CursosRoutingModule { }
