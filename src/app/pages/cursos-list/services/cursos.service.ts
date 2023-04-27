import { Injectable } from '@angular/core';
import {BehaviorSubject, forkJoin, map, Observable, switchMap} from "rxjs";
import {iCurso} from "../../../core/interfaces/iCurso";
import {AlumnosService} from "../../alumns-list/services/alumnos.service";


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$ = new BehaviorSubject<iCurso[]>( [
    {nombre: "Introducción a la Programación", id: 1001},
    {nombre: "Desarrollo Web con HTML, CSS y JavaScript", id: 1002},
    {nombre: "Bases de Datos con SQL", id: 1003},
    {nombre: "Introducción a la Inteligencia Artificial", id: 1004},
    {nombre: "Desarrollo de Aplicaciones Móviles", id: 1005},
    {nombre: "Seguridad Informática", id: 1006},
    {nombre: "Redes de Computadoras", id: 1007},
    {nombre: "Desarrollo de Videojuegos", id: 1008},
    {nombre: "Análisis de Datos con Python", id: 1009},
    {nombre: "Administración de Sistemas Linux", id: 1010}
  ])

  constructor(private alumnosService: AlumnosService) { }

  getListaCursos(): Observable<iCurso[]> {
    return this.cursos$.asObservable();
  }

  getCursoById(idCurso: number): Observable<iCurso | undefined>{
    return  this.cursos$.asObservable()
      .pipe(
        map((curso)=>curso.find((c) => c.id === idCurso))
      )
  }

  getCursosByAlumnoID(alumnoID?: number) {
      this.alumnosService.getAlumnoById(alumnoID)
      .subscribe((a) =>{
        a?.cursosID.forEach((curso)=>{
          this.getCursoById(curso).subscribe(console.log)
        })
      })
  }
}
