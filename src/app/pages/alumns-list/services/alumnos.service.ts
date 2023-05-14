import {Injectable} from '@angular/core';
import {Student} from "../../../core/class/Student";
import {
  BehaviorSubject,
  map,
  mergeMap,
  observable,
  Observable,
  ReplaySubject,
  Subject,
  switchMap,
  take,
  tap
} from "rxjs";
import {CursosService} from "../../cursos-list/services/cursos.service";
import {iCourse} from "../../../core/interfaces/iCourse";
import {CrearAlumno} from "../../../core/interfaces/iPersona";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumnos = new BehaviorSubject<Student[]>([])
  public students$ = this.alumnos.asObservable()
  private actualizarAlumnos$ = this.getListaAlumnos()
    .pipe(
      map((c)=>{
        this.alumnos.next(c)
      })
    )
  constructor(private httpClient: HttpClient) {
    this.actualizarAlumnos$.subscribe()
  }

  getAlumnoById(idAlumno?: number): Observable<Student | undefined> {
    return this.httpClient.get<Student | undefined>(`${environment.baseUrl}/students/` + idAlumno)
  }

  getListaAlumnos(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environment.baseUrl}/students`)
  }


  crearAlumno(data: CrearAlumno): Observable<void> {
    return this.httpClient.post<Student>(`${environment.baseUrl}/students`, data)
      .pipe(
        switchMap(()=>{
          return this.actualizarAlumnos$
        })
      )
  }

  editarAlumno(idAlumno: number, alumnoParaEditar: Student): Observable<void> {
    return this.httpClient.put<Student>(`${environment.baseUrl}/students/` + idAlumno, alumnoParaEditar)
      .pipe(
        switchMap(()=>{
          return this.actualizarAlumnos$;
        })
      )
  }

  eliminarAlumno(idAlumno: number): Observable<void> {
    return this.httpClient.delete<Student>(`${environment.baseUrl}/students/` + idAlumno)
      .pipe(
        switchMap(()=>{
          return this.actualizarAlumnos$
        })
      )
  }


}
