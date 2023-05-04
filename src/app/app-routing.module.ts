import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AlumnsListComponent} from "./pages/alumns-list/alumns-list.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./auth/login/login.component";
import {AlumnoDetalleComponent} from "./pages/alumns-list/alumno-detalle/alumno-detalle.component";
import {CursosListComponent} from "./pages/cursos-list/cursos-list.component";
import {CursoDetalleComponent} from "./pages/cursos-list/curso-detalle/curso-detalle.component";
import {AuthGuard} from "./auth/guards/auth.guard";
import {LoginGuard} from "./auth/guards/login.guard";

const routes: Routes = [
  {
    //http://localhost:4200/dashboard
    path: 'dashboard',
    canActivate:[AuthGuard],
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    // http://localhost:4200/
    path: 'auth',
    canActivate:[LoginGuard],
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m)=>m.AuthModule)
    },
  {
    path: '**',
    canActivate:[AuthGuard],
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
