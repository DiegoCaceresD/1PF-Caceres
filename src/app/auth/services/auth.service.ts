import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {iUsuario} from "../../core/interfaces/iUsuario";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado$ = new BehaviorSubject<iUsuario | null>(null);

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  obtenerUsuarioAutenticado(): Observable<iUsuario | null> {
    return this.usuarioAutenticado$.asObservable()
  }

  login(formValue: iUsuario): void {
    this.httpClient.get<iUsuario[]>(
      `${environment.baseUrl}/usuarios`,
      {
        params: {
          ...formValue
        },
      }
    ).subscribe({
      next: (usuarios) => {
        const usuarioAutenticado = usuarios[0];

        if (usuarioAutenticado) {
          localStorage.setItem('token', usuarioAutenticado.token)
          this.usuarioAutenticado$.next(usuarioAutenticado)
          this.router.navigate([''])
        } else {
          console.log("credenciales incorrectas")
        }
      }
    })
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token')
    return this.httpClient.get<iUsuario[]>(`${environment.baseUrl}/usuarios?token=${token}`)
      .pipe(
        map((usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token)
            this.usuarioAutenticado$.next(usuarioAutenticado)
          }
          return !!usuarioAutenticado;
        })
      )
  }


}
