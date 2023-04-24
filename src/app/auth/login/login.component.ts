import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor( private authService: AuthService) {
    this.loginForm = new FormGroup({
      usuario: this.usuarioControl,
      password: this.passwordControl,
    })
  }

  ngOnInit(): void {
  }

  usuarioControl = new FormControl('',[Validators.required,Validators.minLength(3)])
  passwordControl = new FormControl('', [Validators.required,Validators.minLength(3)])

  login() {
      this.authService.login({
        ...this.loginForm.value,
    })
  }
}
