import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {


  registryForm: FormGroup;
  roleOptions: string[] = ["admin","student"]

  nameControl = new FormControl('',[Validators.required, Validators.minLength(3)])
  userControl = new FormControl('',[Validators.required, Validators.minLength(3)])
  emailControl =  new FormControl('', [Validators.required, Validators.email])
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  roleControl = new FormControl('', [Validators.required])


  constructor(private authService: AuthService, private router: Router) {
  this.registryForm = new FormGroup({
    name: this.nameControl,
    user: this.userControl,
    email: this.emailControl,
    password: this.passwordControl,
    role: this.roleControl,
  });
  }
  generateToken(length: number): string {
    let token = "";
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < length; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return token;
  }

  ngOnInit(): void {
  }

  registry() {
  if (this.registryForm.valid){
    this.authService.registerNewUser({
      token : this.generateToken(10) ,
      ...this.registryForm.value
    }).subscribe()
    this.router.navigate(['dashboard'])
  }
  }

}
