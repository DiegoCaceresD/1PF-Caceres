import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlumnosService} from "../services/alumnos.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Student} from "../../../core/class/Student";
import {CursosService} from "../../cursos-list/services/cursos.service";
import {iCourse} from "../../../core/interfaces/iCourse";


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnInit {

  alumno: Student | undefined;
  cursos: iCourse[];
  constructor(private activatedRoute: ActivatedRoute, alumnosService: AlumnosService) {

     alumnosService.getAlumnoById(parseInt(activatedRoute.snapshot.params['id']))
      .subscribe((a) => {
        this.alumno = a;
      })


  }

  ngOnInit(): void {
  }

}
