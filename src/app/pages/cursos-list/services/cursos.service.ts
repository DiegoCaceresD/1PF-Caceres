import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, map, mergeMap, Observable, pipe, switchMap, take, tap} from "rxjs";
import {CrearCursoData, iCourse} from "../../../core/interfaces/iCourse";
import {AlumnosService} from "../../alumns-list/services/alumnos.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private course = new BehaviorSubject<iCourse[]>([])
  public courses$ = this.course.asObservable()
  private updateCourses$ = this.getListaCursos()
    .pipe(
      map((c)=>{
        this.course.next(c)
      })
    );

  constructor(private alumnosServices: AlumnosService, private httpClient: HttpClient) {
    this.updateCourses$.subscribe()
  }


  getListaCursos(): Observable<iCourse[]> {
    return this.httpClient.get<iCourse[]>(`${environment.baseUrl}/courses`)
  }

  getCursoById(idCurso: number): Observable<iCourse | undefined> {
    return this.httpClient.get<iCourse>(`${environment.baseUrl}/courses/` + idCurso)
  }

  crearCurso(data: CrearCursoData): Observable<void> {
    return this.httpClient.post<iCourse>(`${environment.baseUrl}/courses`, data)
      .pipe(
        switchMap(()=>{
          return this.updateCourses$;
        })
      )
  }

  editarCurso(idCurso: number, cursoEditado: Partial<iCourse>): Observable<void>  {
    return this.httpClient.put<iCourse>(`${environment.baseUrl}/courses/` + idCurso, cursoEditado)
      .pipe(
        switchMap(()=>{
          return this.updateCourses$;
        })
      )
  }

  eliminarCurso(idCurso: number): Observable<void> {
    return this.httpClient.delete<iCourse>(`${environment.baseUrl}/courses/`+idCurso)
      .pipe(
        switchMap(()=>{
          return this.updateCourses$
        })
      )
  }
}
