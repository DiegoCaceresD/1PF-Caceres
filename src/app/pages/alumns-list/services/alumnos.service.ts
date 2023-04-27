import { Injectable } from '@angular/core';
import {Alumno} from "../../../core/class/Alumno";
import {BehaviorSubject, map, observable, Observable, Subject} from "rxjs";
import {CursosService} from "../../cursos-list/services/cursos.service";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumno$ = new BehaviorSubject<Alumno[]>([
    {id: 1, nombre: "Juan", apellido: "Pérez", fechaNacimiento: new Date(2002, 5, 12), cursosID:[1001,1004,1005]},
{id: 2, nombre: "María", apellido: "González", fechaNacimiento: new Date(2003, 2, 22),cursosID:[1001,1004,1008]},
{id: 3, nombre: "Pedro", apellido: "López", fechaNacimiento: new Date(2002, 9, 7),cursosID:[1001,1007,1005]},
{id: 4, nombre: "Luisa", apellido: "Hernández", fechaNacimiento: new Date(2003, 11, 1),cursosID:[1008,1004,1005]},
{id: 5, nombre: "Jorge", apellido: "García", fechaNacimiento: new Date(2002, 7, 17),cursosID:[1001,1002,1008]},
{id: 6, nombre: "Ana", apellido: "Martínez", fechaNacimiento: new Date(2003, 4, 5),cursosID:[1009,1004,1006]},
{id: 7, nombre: "Miguel", apellido: "Sánchez", fechaNacimiento: new Date(2002, 12, 3),cursosID:[1007,1004,1005]},
{id: 8, nombre: "Sofía", apellido: "Ramírez", fechaNacimiento: new Date(2003, 8, 28),cursosID:[1001,1004,1006]},
{id: 9, nombre: "Pablo", apellido: "Gómez", fechaNacimiento: new Date(2002, 1, 9),cursosID:[1004,1008,1005]},
{id: 10, nombre: "Adriana", apellido: "Castillo", fechaNacimiento: new Date(2003, 6, 15),cursosID:[1001,1002,1005]},
{id: 11, nombre: "Carlos", apellido: "Díaz", fechaNacimiento: new Date(2002, 3, 28),cursosID:[1001,1004,1006]},
{id: 12, nombre: "Lucía", apellido: "Fernández", fechaNacimiento: new Date(2003, 10, 20),cursosID:[1008,1004,1005]},
{id: 13, nombre: "José", apellido: "Mendoza", fechaNacimiento: new Date(2002, 2, 16),cursosID:[1006,1002,1005]},
{id: 14, nombre: "Verónica", apellido: "Herrera", fechaNacimiento: new Date(2003, 9, 14),cursosID:[1003,1004,1005]},
{id: 15, nombre: "Ricardo", apellido: "Vargas", fechaNacimiento: new Date(2002, 4, 23),cursosID:[1001,1004,1007]},
{id: 16, nombre: "Isabel", apellido: "Fuentes", fechaNacimiento: new Date(2003, 1, 30),cursosID:[1006,1004,1005]},
{id: 17, nombre: "Martín", apellido: "Rojas", fechaNacimiento: new Date(2002, 10, 5),cursosID:[1002,1003,1009]},
{id: 18, nombre: "Laura", apellido: "Alvarado", fechaNacimiento: new Date(2003, 7, 11),cursosID:[1007,1004,1008]},
{id: 19, nombre: "Eduardo", apellido: "Núñez", fechaNacimiento: new Date(2002, 6, 18),cursosID:[1003,1004,1005]},
{id: 20, nombre: "Gabriela", apellido: "Guzmán", fechaNacimiento: new Date(2002, 6, 20),cursosID:[1009,1002,1005]},
  ])

  constructor() { }

  getAlumnoById(idAlumno?: number): Observable<Alumno | undefined> {
    return this.alumno$.asObservable()
      .pipe(
      map((alumno) => alumno.find((a) => a.id === idAlumno))
      )
  }

  getListaAlumnos(): Observable<Alumno[] > {
    return this.alumno$.asObservable();
  }

  getComisión(): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Comisión 41190');
      }, 2000)
    })
  }

}
