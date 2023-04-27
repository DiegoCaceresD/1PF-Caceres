import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AlumnsListComponent} from "./pages/alumns-list/alumns-list.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {AlumnoDetalleComponent} from "./pages/alumns-list/alumno-detalle/alumno-detalle.component";
import {CursosListComponent} from "./pages/cursos-list/cursos-list.component";
import {CursoDetalleComponent} from "./pages/cursos-list/curso-detalle/curso-detalle.component";

const routes: Routes = [
  {
    //http://localhost:4200/dashboard
    path: 'dashboard',
    component: DashboardComponent,
    //http://localhost:4200/dashboard/alumnos
    children: [
      {
        path: 'alumnos',
        children: [
          {
            path: '',
            component: AlumnsListComponent,
          },
          {
            //http://localhost:4200/dashboard/alumnos/:id
            path: ':id',
            component: AlumnoDetalleComponent
          }
        ]
      },
      {
        path:'cursos',
        children:[
          {
            path: '',
            component: CursosListComponent
          },
          {
            path: ':id',
            component: CursoDetalleComponent
          }
        ]
      }
    ]
  },
  {
    // http://localhost:4200/
    path: 'auth',
    component: AuthComponent,
    children: [{
      path: 'login',
      component: LoginComponent,
    }]
  },
  {
    path: '**',
    component: DashboardComponent,
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
