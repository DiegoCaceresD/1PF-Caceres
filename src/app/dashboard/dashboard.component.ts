import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {AuthService} from "../services/auth.service";
import {iUsuario} from "../interfaces/iUsuario";
import {NavItem} from "../class/NavItem";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toggle: Boolean = false;
  authUser: iUsuario | null = null;
  links = NavItem.links;

  constructor(private authService: AuthService) {
    this.authService.obtenerUsuarioAutenticado()
      .subscribe((usuario) => this.authUser = usuario );
  }

  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav?.close();
  }

  openList() {
    this.toggle = !this.toggle;
  }
}
