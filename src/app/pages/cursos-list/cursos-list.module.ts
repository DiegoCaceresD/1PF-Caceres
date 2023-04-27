import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosListComponent } from './cursos-list.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatTableModule} from "@angular/material/table";
import {SharedModule} from "../../shared/shared.module";
import {MatListModule} from "@angular/material/list";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {ErrorsHelperModule} from "../../helpers/errors-helper/errors-helper.module";
import { CursosAbmComponent } from './cursos-abm/cursos-abm.component';
import { CursoDetalleComponent } from './curso-detalle/curso-detalle.component';
import {MatCardModule} from "@angular/material/card";




@NgModule({
  declarations: [
    CursosListComponent,
    CursosAbmComponent,
    CursoDetalleComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatButtonModule,
    ReactiveFormsModule,
    ErrorsHelperModule,
    MatCardModule
  ],
  exports: [
    CursosListComponent
  ]
})
export class CursosListModule { }
