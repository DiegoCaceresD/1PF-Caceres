import {IPersona} from "../interfaces/iPersona";

export class Alumns implements IPersona{
  id: number;
  nombre: string;
  apellido:string;
  fechaNacimiento: Date;
}
