import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlumnosService} from "../services/alumnos.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Alumno} from "../../../core/class/Alumno";
import {CursosService} from "../../cursos-list/services/cursos.service";
import {iCurso} from "../../../core/interfaces/iCurso";


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnInit {

  alumno: Alumno | undefined;
  cursos: iCurso[];
  constructor(private activatedRoute: ActivatedRoute, alumnosService: AlumnosService) {

     alumnosService.getAlumnoById(parseInt(activatedRoute.snapshot.params['id']))
      .subscribe((a) => {
        this.alumno = a;
      })


  }

  ngOnInit(): void {
  }

}
