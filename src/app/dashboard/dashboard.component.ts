import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  toggle: Boolean = false;

  constructor() { }

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
