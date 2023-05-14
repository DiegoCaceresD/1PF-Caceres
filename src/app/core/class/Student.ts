import {IPersona} from "../interfaces/iPersona";

export class Student implements IPersona{
  id: number;
  name: string;
  lastName:string;
  birthDate: Date;
  cursosID?: number;
}
