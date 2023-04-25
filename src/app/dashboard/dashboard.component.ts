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
  links = NavItem.links;

  constructor() {
  }

  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav?.close();
  }
}
