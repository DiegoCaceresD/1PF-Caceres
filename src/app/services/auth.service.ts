import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {iUsuario} from "../interfaces/iUsuario";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado$ = new Subject<iUsuario>();

  constructor() { }

  obtenerUsuarioAutenticado(): Observable<iUsuario>{
    return this.usuarioAutenticado$.asObservable()
  }

  login(usuario: iUsuario): void {
    this.usuarioAutenticado$.next(usuario)
  }
}
