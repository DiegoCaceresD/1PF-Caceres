import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AlumnsListModule} from "./pages/alumns-list/alumns-list.module";
import {AlumnsListComponent} from "./pages/alumns-list/alumns-list.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {AlumnoDetalleComponent} from "./pages/alumns-list/alumno-detalle/alumno-detalle.component";

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
      // {
      //   path: 'alumnos/:id',
      //   component: AlumnoDetalleComponent
      // },

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
