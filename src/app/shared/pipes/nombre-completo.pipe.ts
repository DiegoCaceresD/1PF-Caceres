import { Pipe, PipeTransform } from '@angular/core';
import {Student} from "../../core/class/Student";

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Student, ...args: unknown[]): unknown {
    return `${value.name} ${value.lastName}`;
  }

}
