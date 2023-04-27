import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CursosService} from "../services/cursos.service";
import {iCurso} from "../../../core/interfaces/iCurso";
import {nextMonthDisabled} from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-tools";

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  styleUrls: ['./curso-detalle.component.scss']
})
export class CursoDetalleComponent implements OnInit {

  curso: iCurso | undefined;

  constructor(private activatedRoute: ActivatedRoute, cursosService: CursosService) {
    cursosService.getCursoById(parseInt(activatedRoute.snapshot.params['id']))
      .subscribe( (c) => {
          this.curso = c;
        }
      )
    console.log(this.curso?.id)
  }

  ngOnInit(): void {

  }

}
