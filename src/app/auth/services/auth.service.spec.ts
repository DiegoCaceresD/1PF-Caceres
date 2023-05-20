import {TestBed} from "@angular/core/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {AuthService} from "./auth.service";
import {IUser, LoginUser} from "../../core/interfaces/iUser";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";
import {skip} from "rxjs";

describe('Pruebas de AuthService',()=>{
  let service: AuthService;
  let httpController: HttpTestingController;
  beforeEach(async() =>{
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ]
    }).compileComponents();
    service = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  })

  it('El metodo login debe hacer un llamado a la URL mock con los datos del fake login y Auntenticarlos y debe realizar una redirección', (done)=> {
    const FAKE_LOGIN: LoginUser = {user: 'test', password:'test123'}
    const MOCK_REQUEST_RESULT: IUser[] =[
      {id: 1,
        user: 'test',
        password:'test123',
        email:'test@mail.com',
        role:'test',
        token:'test',
        name:'test'}
    ];

    service.login(FAKE_LOGIN)
    service.obtenerUsuarioAutenticado()
      .pipe(
        skip(1)
      )
      .subscribe((user)=>{
        console.log("USER: ",user)
        expect(user).toBeTruthy()
        done()
      })

    spyOn(TestBed.inject(Router),'navigate')

    httpController.expectOne({
      url:`${environment.baseUrl}/users?user=${FAKE_LOGIN.user}&password=${FAKE_LOGIN.password}`,
      method: 'GET'
    }).flush(MOCK_REQUEST_RESULT
    )
  });

  it('El logout debe remover un item del LocalStorage y redireccionar',  ()=>{
    const FAKE_LOGIN: LoginUser = {user: 'test', password:'test123'}
    const MOCK_REQUEST_RESULT: IUser[] =[
      {id: 1,
        user: 'test',
        password:'test123',
        email:'test@mail.com',
        role:'test',
        token:'test',
        name:'test'}
    ];
    const tokens = localStorage.getItem('token')
    const spyOnNavigate = spyOn(TestBed.inject(Router),'navigate')
    service.login(FAKE_LOGIN)
    httpController.expectOne({
      url:`${environment.baseUrl}/users?user=${FAKE_LOGIN.user}&password=${FAKE_LOGIN.password}`,
      method: 'GET'
    }).flush(MOCK_REQUEST_RESULT
    )

    service.logOut();

    expect(spyOnNavigate).toHaveBeenCalled()
    expect(tokens).toBeNull()
  });

  // expect()
})
