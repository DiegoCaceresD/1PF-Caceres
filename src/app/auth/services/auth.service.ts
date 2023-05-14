import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, Subject} from "rxjs";
import {IUser} from "../../core/interfaces/iUser";
import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  obtenerUsuarioAutenticado(): Observable<IUser | null> {
    return this.usuarioAutenticado$.asObservable()
  }

  login(formValue: IUser): void {
    this.httpClient.get<IUser[]>(
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
    return this.httpClient.get<IUser[]>(`${environment.baseUrl}/usuarios?token=${token}`)
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

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['auth','login'])
  }

  validateAdmin(): boolean{
    let isAdmin
    this.obtenerUsuarioAutenticado()
      .subscribe((authUser)=>{
        isAdmin= authUser?.role
      })
    return isAdmin === "admin"
  }
}
