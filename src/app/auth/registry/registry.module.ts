import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryComponent } from './registry.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    RegistryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[
    RegistryComponent
  ]
})
export class RegistryModule { }
