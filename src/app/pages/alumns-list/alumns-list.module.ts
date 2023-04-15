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
import {PipesModule} from "../../shared/pipes/pipes.module";
import {DirectivesModule} from "../../shared/directives/directives.module";
import {MatButtonModule} from "@angular/material/button";
import {AlumnosAbmComponent} from "./alumnos-abm/alumnos-abm.component";
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {ReactiveFormsModule} from "@angular/forms";
import {A11yModule} from "@angular/cdk/a11y";





@NgModule({
    declarations: [
        AlumnsListComponent,
        AlumnosAbmComponent
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
    PipesModule,
    DirectivesModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    A11yModule
  ]
})
export class AlumnsListModule { }
