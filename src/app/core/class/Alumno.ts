import {IPersona} from "../interfaces/iPersona";

export class Alumno implements IPersona{
  id: number;
  nombre: string;
  apellido:string;
  fechaNacimiento: Date;
}
