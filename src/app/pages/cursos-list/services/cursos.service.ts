import {Injectable} from '@angular/core';
import {BehaviorSubject, forkJoin, map, mergeMap, Observable, pipe, switchMap, take, tap} from "rxjs";
import {CrearCursoData, iCurso} from "../../../core/interfaces/iCurso";
import {AlumnosService} from "../../alumns-list/services/alumnos.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class CursosService {


  constructor(private alumnosServices: AlumnosService, private httpClient: HttpClient) {
  }

  getListaCursos(): Observable<iCurso[]> {
    return this.httpClient.get<iCurso[]>(`${environment.baseUrl}/cursos`)
  }

  getCursoById(idCurso: number): Observable<iCurso | undefined> {
    return this.httpClient.get<iCurso>(`${environment.baseUrl}/cursos/` + idCurso)
  }

  crearCurso(data: CrearCursoData): Observable<iCurso> {
    return this.httpClient.post<iCurso>(`${environment.baseUrl}/cursos`, data)
  }

  editarCurso(idCurso: number, cursoEditado: Partial<iCurso>): Observable<iCurso> {
    return this.httpClient.put<iCurso>(`${environment.baseUrl}/cursos/` + idCurso, cursoEditado)
  }

  eliminarCurso(idCurso: number): Observable<iCurso> {
    return this.httpClient.delete<iCurso>(`${environment.baseUrl}/cursos/`+idCurso)
  }
}
