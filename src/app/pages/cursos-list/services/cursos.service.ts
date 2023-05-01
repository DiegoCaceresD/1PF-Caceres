import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, map, Observable, pipe, switchMap, take} from "rxjs";
import {CrearCursoData, iCurso} from "../../../core/interfaces/iCurso";
import {AlumnosService} from "../../alumns-list/services/alumnos.service";


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos$ = new BehaviorSubject<iCurso[]>([
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

  constructor(private alumnosService: AlumnosService) {
  }

  getListaCursos(): Observable<iCurso[]> {
    return this.cursos$.asObservable();
  }

  getCursoById(idCurso: number): Observable<iCurso | undefined> {
    return this.cursos$.asObservable()
      .pipe(
        map((curso) => curso.find((c) => c.id === idCurso))
      )
  }

  getCursosByAlumnoID(alumnoID?: number) {
    this.alumnosService.getAlumnoById(alumnoID)
      .subscribe((a) => {
        a?.cursosID.forEach((curso) => {
          this.getCursoById(curso).subscribe(console.log)
        })
      })
  }

  crearCurso(data: CrearCursoData): Observable<iCurso[]> {
    this.cursos$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (cursos) => {
          this.cursos$.next([
            ...cursos,
            {
              id: cursos[cursos.length - 1].id + 1,
              ...data,
            },
          ]);
        },
      })
    console.log(data)
    return this.cursos$.asObservable();
  }

  editarCurso(idCurso: number, cursoEditado: Partial<iCurso>): Observable<iCurso[]> {
    this.cursos$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (cursos) => {
          const cursoActualizado = cursos.map((curso) => {
            if (curso.id === idCurso) {
              return {
                ...curso,
                ...cursoEditado
              }
            } else {
              return curso
            }
          })
          this.cursos$.next(cursoActualizado)
        }
      })
    return this.cursos$.asObservable();
  }

  eliminarCurso(idCurso: number): Observable<iCurso[]> {
    this.cursos$
      .pipe(
        take(1)
      )
      .subscribe(
        (cursos) => {
          const cursosActualizados = cursos.filter((cursoActual) => cursoActual.id !== idCurso)

          this.cursos$.next(cursosActualizados)
        }
      )
    return this.cursos$.asObservable()
  }
}
