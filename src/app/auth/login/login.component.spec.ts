import {TestBed} from "@angular/core/testing";
import {LoginComponent} from "./login.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {RouterTestingModule} from "@angular/router/testing";
import {AuthService} from "../services/auth.service";
import {AuthServiceMock} from "../mocks/auth-service.mock";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ErrorsHelperModule} from "../../helpers/errors-helper/errors-helper.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('Pruebas del Componente Login', ()=>{
  let component: LoginComponent;
  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations:[
        LoginComponent
      ],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        ErrorsHelperModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Si el campo usuario del formulario está vacío, el campo debe ser inválido  ', ()=> {
  component.loginForm.setValue({user: null, password: 'test123'});

    expect(component.usuarioControl.invalid).toBeTrue()
  });
  it('Si el campo password del formulario está vacío, el campo debe ser inválido  ', ()=> {
  component.loginForm.setValue({user: 'test', password: null});

    expect(component.passwordControl.invalid).toBeTrue()
  });
  it('Si el campo password y usuario del formulario está vacío, debe ser inválido  ', ()=> {
  component.loginForm.setValue({user: null, password: null});

    expect(component.loginForm.invalid).toBeTrue()
  });

  it('Si el LoginForm es valido debe llamar al metodo login de authService', function () {
    component.loginForm.setValue({user: "test", password:"test123"});
    const spyOnAuthServiceLogin = spyOn(TestBed.inject(AuthService),'login');

    component.login();

    expect(component.loginForm.valid).toBeTrue();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled()

  });
})
