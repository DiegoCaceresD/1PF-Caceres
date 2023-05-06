import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, matDialogAnimations, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alumnos-abm',
  templateUrl: './alumnos-abm.component.html',
  styleUrls: ['./alumnos-abm.component.scss']
})
export class AlumnosAbmComponent implements OnInit {

  alumnosForm: FormGroup
  constructor(
    private dialogRef: MatDialogRef<AlumnosAbmComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {

    if (data){
      this.nombreControl.setValue(data.alumnoParaEditar.nombre),
      this.apellidoControl.setValue(data.alumnoParaEditar.apellido),
      this.fechaNacimientoControl.setValue(data.alumnoParaEditar.fechaNacimiento)
    }
    this.alumnosForm = new FormGroup({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      fechaNacimiento: this.fechaNacimientoControl,
    });

  }

  ngOnInit(): void {
  }

  nombreControl = new FormControl('', [Validators.required,Validators.minLength(3)])
  apellidoControl = new FormControl('', [Validators.required,Validators.minLength(3)])
  fechaNacimientoControl = new FormControl('', [Validators.required,Validators.minLength(3)])

  guardar(): void{
    if(this.alumnosForm.valid){
      this.dialogRef.close(this.alumnosForm.value)
    }

  }

  close() {
    this.dialogRef.close()
  }
}
