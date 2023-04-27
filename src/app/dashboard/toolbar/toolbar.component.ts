import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AlumnosAbmComponent} from "../../pages/alumns-list/alumnos-abm/alumnos-abm.component";
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../../auth/login/login.component";
import {AuthService} from "../../auth/services/auth.service";
import {iUsuario} from "../../core/interfaces/iUsuario";
import {map, Observable, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  authUserObs$: Observable<any> ;

  destroyed$ = new Subject<void>()
  constructor(private matDialog: MatDialog, private authService: AuthService, private router:Router) {

    this.authUserObs$ = this.authService.obtenerUsuarioAutenticado()
      .pipe(
        map((user) => user?.usuario.toUpperCase())
      )


  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete()
  }

  @Input()
  sidenav: MatSidenav | undefined;

  menu() {
    this.sidenav?.toggle()
  }

  openLogin():void {
    this.router.navigate(['auth', 'login'])
  }
}
