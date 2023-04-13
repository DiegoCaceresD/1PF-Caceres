import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-abm',
  templateUrl: './alumnos-abm.component.html',
  styleUrls: ['./alumnos-abm.component.scss']
})
export class AlumnosAbmComponent implements OnInit {

  alumnosForm: FormGroup
  constructor( private dialogRef: MatDialogRef<AlumnosAbmComponent>) {
    this.alumnosForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      fechaNacimiento: this.fechaNacimiento,
    });
  }

  ngOnInit(): void {
  }

  nombreControl = new FormControl('', [Validators.required])
  apellidoControl = new FormControl('', [Validators.required])
  fechaNacimiento = new FormControl('', [Validators.required])

  guardar(): void{
  this.dialogRef.close(this.alumnosForm.value)
  }
}
