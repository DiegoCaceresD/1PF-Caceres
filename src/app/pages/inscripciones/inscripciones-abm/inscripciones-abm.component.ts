import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CursosService} from "../../cursos-list/services/cursos.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {AlumnosService} from "../../alumns-list/services/alumnos.service";
import {iCourse} from "../../../core/interfaces/iCourse";
import {Student} from "../../../core/class/Student";

@Component({
  selector: 'app-inscripciones-abm',
  templateUrl: './inscripciones-abm.component.html',
  styleUrls: ['./inscripciones-abm.component.scss']
})
export class InscripcionesAbmComponent implements OnInit {

  public courses: iCourse[] = [];
  public students: Student[] = [];


  ngOnInit(): void {
    this.getCoursesName()
    this.getStudentsName()
  }

  inscripcionesForm: FormGroup = new FormGroup({
    course: new FormControl('', Validators.required),
    student: new FormControl('', Validators.required)
  });

  constructor(private studentsService: AlumnosService, private coursesService: CursosService, private dialogRef: MatDialogRef<InscripcionesAbmComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  getCoursesName() {
    this.coursesService.courses$
      .subscribe({
        next: (c) => {
          c.map((c) => {
            this.courses?.push(c)
          })
        }
      })
  }

  getStudentsName() {
    this.studentsService.students$
      .subscribe({
        next: (students) => {
          students.map((s) => {
            this.students?.push(s)
          })
        }
      })
  }

  submitForm() {
    if (this.inscripcionesForm.valid) {
      this.dialogRef.close(this.inscripcionesForm.value)
    }
  }
}
