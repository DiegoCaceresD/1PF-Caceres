import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AuthComponent} from "./auth/auth.component";
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
