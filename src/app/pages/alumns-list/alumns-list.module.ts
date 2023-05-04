import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnsListComponent } from './alumns-list.component';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {AlumnosAbmComponent} from "./alumnos-abm/alumnos-abm.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ErrorsHelperModule} from "../../helpers/errors-helper/errors-helper.module";
import {AlumnoDetalleComponent} from "./alumno-detalle/alumno-detalle.component";
import {SharedModule} from "../../shared/shared.module";
import {MatCardModule} from "@angular/material/card";
import {RouterModule, Routes} from "@angular/router";
import {AlumnosRoutingModule} from "./alumnos-routing.module";


@NgModule({
    declarations: [
        AlumnsListComponent,
        AlumnosAbmComponent,
        AlumnoDetalleComponent
    ],
    exports: [
        AlumnsListComponent
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
        MatCardModule,
        AlumnosRoutingModule
    ]
})
export class AlumnsListModule { }
