import { Pipe, PipeTransform } from '@angular/core';
import {Alumns} from "../../class/Alumns";

@Pipe({
  name: 'nombreCompleto'
})
export class NombreCompletoPipe implements PipeTransform {

  transform(value: Alumns, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }

}
