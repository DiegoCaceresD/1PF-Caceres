import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {iUsuario} from "../interfaces/iUsuario";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado$ = new BehaviorSubject<iUsuario | null>(null);

  constructor(private router: Router) { }

  obtenerUsuarioAutenticado(): Observable<iUsuario | null>{
    return this.usuarioAutenticado$.asObservable()
  }

  login(formValue: iUsuario): void {
    this.usuarioAutenticado$.next(formValue)
    this.router.navigate(['dashboard'])
  }
}
