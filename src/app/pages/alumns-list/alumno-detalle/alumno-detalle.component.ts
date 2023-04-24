import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlumnosService} from "../../../services/alumnos.service";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";


@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.scss']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, alumnosService: AlumnosService) {

    alumnosService.getAlumnoById(parseInt(activatedRoute.snapshot.params['id']))
      .subscribe(console.log)
  }

  ngOnInit(): void {
  }

}
