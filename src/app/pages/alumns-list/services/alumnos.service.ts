import {Injectable} from '@angular/core';
import {Alumno} from "../../../core/class/Alumno";
import {BehaviorSubject, map, mergeMap, observable, Observable, Subject, take, tap} from "rxjs";
import {CursosService} from "../../cursos-list/services/cursos.service";
import {iCurso} from "../../../core/interfaces/iCurso";
import {CrearAlumno} from "../../../core/interfaces/iPersona";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumno$ = new BehaviorSubject<Alumno[]>([])

  constructor(private httpClient: HttpClient) {
  }

  getAlumnoById(idAlumno?: number): Observable<Alumno | undefined> {
    return this.alumno$.asObservable()
      .pipe(
        map((alumno) => alumno.find((a) => a.id === idAlumno))
      )
  }

  get Alumnos(): Observable<Alumno[]>{
    return this.alumno$.asObservable()
  }

  getListaAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.baseUrl}/alumnos`)
      .pipe(
        tap((alumnos) => this.alumno$.next(alumnos)),
        mergeMap(() =>this.alumno$.asObservable())
      )
  }


  crearAlumno(data: CrearAlumno): Observable<Alumno[]> {
    this.alumno$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (alumnos) => {
          this.alumno$.next([
            ...alumnos,
            {
              id: alumnos[alumnos.length - 1].id + 1,
              ...data,
            },
          ]);
        },
      })
    return this.alumno$.asObservable();
  }

  editarAlumno(idAlumno: number, alumnoParaEditar: Alumno){
    this.alumno$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (alumnos)=>{
          const alumnosActualizados = alumnos.map((alumno)=>{
            if (idAlumno === alumno.id){
              return {
                ...alumno,
                ...alumnoParaEditar
              }
            } else {
              return alumno
            }
          })
          this.alumno$.next(alumnosActualizados)
        }
      })
    return this.alumno$.asObservable()
  }

  eliminarAlumno(idAlumno: number): Observable<Alumno[]>{
    this.alumno$
      .pipe(
        take(1)
      )
      .subscribe({
        next: (alumnos) =>{
          const alumnosActualizados = alumnos.filter((alumno) =>alumno.id !== idAlumno)

          this.alumno$.next(alumnosActualizados)
        }
      })
    return this.alumno$.asObservable()
  }

}
