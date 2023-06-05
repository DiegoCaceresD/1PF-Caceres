import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscripcionesComponent } from './inscripciones.component';
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from "../../shared/shared.module";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import { InscripcionesAbmComponent } from './inscripciones-abm/inscripciones-abm.component';
import {InscripcionesRoutingModule} from "./inscripciones-routing.module";
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './store/inscripciones.effects';
import {StoreModule} from "@ngrx/store";
import {inscripcionesFeature} from "./store/inscripciones.reducer";


@NgModule({
  declarations: [
    InscripcionesComponent,
    InscripcionesAbmComponent
  ],
  imports: [
    MatSelectModule,
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
    MatCardModule,
    MatDialogModule,
    InscripcionesRoutingModule,
    StoreModule.forFeature(inscripcionesFeature),
    EffectsModule.forFeature([InscripcionesEffects]),
    EffectsModule.forRoot([])
  ],
  exports: [
    InscripcionesComponent
  ]
})
export class InscripcionesModule { }
