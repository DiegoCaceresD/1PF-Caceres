import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlumnosService} from "../services/alumnos.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Alumno} from "../../../core/class/Alumno";
import {CursosService} from "../../cursos-list/services/cursos.service";


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnInit {

  alumno: Alumno | undefined;
  constructor(private activatedRoute: ActivatedRoute, alumnosService: AlumnosService, cursosService: CursosService) {

     alumnosService.getAlumnoById(parseInt(activatedRoute.snapshot.params['id']))
      .subscribe((a) => {
        this.alumno = a;
      })

    cursosService.getCursosByAlumnoID(this.alumno?.id)
  }

  ngOnInit(): void {
  }

}
