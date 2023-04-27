import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cursos-abm',
  templateUrl: './cursos-abm.component.html',
  styleUrls: ['./cursos-abm.component.scss']
})
export class CursosAbmComponent implements OnInit {

  cursosForm: FormGroup;

  nombreControl = new FormControl ('', [Validators.required,Validators.minLength(3)])

  constructor(private dialogRef: MatDialogRef<CursosAbmComponent>, @Inject(MAT_DIALOG_DATA) private data:any) {

    if (data){
      this.nombreControl.setValue(data.cursoParaEditar.nombre)
    }

    this.cursosForm = new FormGroup({
      nombre: this.nombreControl
    })
  }

  ngOnInit(): void {
  }

  guardar(){
    if (this.cursosForm.valid){
      this.dialogRef.close(this.cursosForm.value)
    }
  }

  close(){
    this.dialogRef.close()
  }

}
