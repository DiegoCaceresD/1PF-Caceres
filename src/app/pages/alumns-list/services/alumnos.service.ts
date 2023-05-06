import {Injectable} from '@angular/core';
import {Alumno} from "../../../core/class/Alumno";
import {BehaviorSubject, map, mergeMap, observable, Observable, ReplaySubject, Subject, take, tap} from "rxjs";
import {CursosService} from "../../cursos-list/services/cursos.service";
import {iCurso} from "../../../core/interfaces/iCurso";
import {CrearAlumno} from "../../../core/interfaces/iPersona";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


  constructor(private httpClient: HttpClient) {
  }

  getAlumnoById(idAlumno?: number): Observable<Alumno | undefined> {
    return this.httpClient.get<Alumno | undefined>(`${environment.baseUrl}/alumnos/` + idAlumno)
  }

  getListaAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${environment.baseUrl}/alumnos`)
  }


  crearAlumno(data: CrearAlumno): Observable<Alumno> {
    return this.httpClient.post<Alumno>(`${environment.baseUrl}/alumnos`, data)
  }

  editarAlumno(idAlumno: number, alumnoParaEditar: Alumno) {
    return this.httpClient.put<Alumno>(`${environment.baseUrl}/alumnos/` + idAlumno, alumnoParaEditar)
  }

  eliminarAlumno(idAlumno: number): Observable<Alumno> {
    return this.httpClient.delete<Alumno>(`${environment.baseUrl}/alumnos/` + idAlumno)
  }

}
