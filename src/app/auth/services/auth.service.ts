import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, of, Subject, switchMap} from "rxjs";
import {IUser, LoginUser, NewUser} from "../../core/interfaces/iUser";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);

  constructor(private router: Router, private httpClient: HttpClient, private snackBar: MatSnackBar) {
  }

  obtenerUsuarioAutenticado(): Observable<IUser | null> {
    return this.usuarioAutenticado$.asObservable()
  }

  login(formValue: LoginUser): void {
    this.httpClient.get<IUser[]>(
      `${environment.baseUrl}/users`,
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
          this.snackBar.open("Credenciales Incorrectas")
        }
      }
    })
  }

  verificarToken(): Observable<boolean> {
    const token = localStorage.getItem('token')
    return this.httpClient.get<IUser[]>(`${environment.baseUrl}/users?token=${token}`)
      .pipe(
        map((usuarios) => {
          const usuarioAutenticado = usuarios[0];
          if (usuarioAutenticado) {
            localStorage.setItem('token', usuarioAutenticado.token)
            this.usuarioAutenticado$.next(usuarioAutenticado)
          }
          return !!usuarioAutenticado;
        }),
        catchError((err)=>{
          return of(false)
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

  registerNewUser(data: NewUser):Observable<any>{
    console.log(data)
    return this.httpClient.post<IUser>(`${environment.baseUrl}/users`,data)

  }
}
