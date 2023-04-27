import { Injectable } from '@angular/core';
import {Alumno} from "../../../core/class/Alumno";
import {BehaviorSubject, map, observable, Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  private alumno$ = new BehaviorSubject<Alumno[]>([
    {id: 1, nombre: "Juan", apellido: "Pérez", fechaNacimiento: new Date(2002, 5, 12)},
{id: 2, nombre: "María", apellido: "González", fechaNacimiento: new Date(2003, 2, 22)},
{id: 3, nombre: "Pedro", apellido: "López", fechaNacimiento: new Date(2002, 9, 7)},
{id: 4, nombre: "Luisa", apellido: "Hernández", fechaNacimiento: new Date(2003, 11, 1)},
{id: 5, nombre: "Jorge", apellido: "García", fechaNacimiento: new Date(2002, 7, 17)},
{id: 6, nombre: "Ana", apellido: "Martínez", fechaNacimiento: new Date(2003, 4, 5)},
{id: 7, nombre: "Miguel", apellido: "Sánchez", fechaNacimiento: new Date(2002, 12, 3)},
{id: 8, nombre: "Sofía", apellido: "Ramírez", fechaNacimiento: new Date(2003, 8, 28)},
{id: 9, nombre: "Pablo", apellido: "Gómez", fechaNacimiento: new Date(2002, 1, 9)},
{id: 10, nombre: "Adriana", apellido: "Castillo", fechaNacimiento: new Date(2003, 6, 15)},
{id: 11, nombre: "Carlos", apellido: "Díaz", fechaNacimiento: new Date(2002, 3, 28)},
{id: 12, nombre: "Lucía", apellido: "Fernández", fechaNacimiento: new Date(2003, 10, 20)},
{id: 13, nombre: "José", apellido: "Mendoza", fechaNacimiento: new Date(2002, 2, 16)},
{id: 14, nombre: "Verónica", apellido: "Herrera", fechaNacimiento: new Date(2003, 9, 14)},
{id: 15, nombre: "Ricardo", apellido: "Vargas", fechaNacimiento: new Date(2002, 4, 23)},
{id: 16, nombre: "Isabel", apellido: "Fuentes", fechaNacimiento: new Date(2003, 1, 30)},
{id: 17, nombre: "Martín", apellido: "Rojas", fechaNacimiento: new Date(2002, 10, 5)},
{id: 18, nombre: "Laura", apellido: "Alvarado", fechaNacimiento: new Date(2003, 7, 11)},
{id: 19, nombre: "Eduardo", apellido: "Núñez", fechaNacimiento: new Date(2002, 6, 18)},
{id: 20, nombre: "Gabriela", apellido: "Guzmán", fechaNacimiento: new Date(2003)},
  ])

  constructor() { }

  getAlumnoById(idAlumno: number): Observable<Alumno | undefined> {
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
