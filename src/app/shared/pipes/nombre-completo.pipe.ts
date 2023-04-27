import { Pipe, PipeTransform } from '@angular/core';
import {Alumno} from "../../core/class/Alumno";

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
