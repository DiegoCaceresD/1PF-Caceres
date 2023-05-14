import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable, switchMap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {NewInscription, Inscription} from "../../../core/interfaces/Inscription";

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {

  private inscriptions = new BehaviorSubject<Inscription[]>([])
  public inscriptions$ = this.inscriptions.asObservable();
  private updateInscriptions$ = this.getInscriptionsList()
    .pipe(
      map((i)=>{
        this.inscriptions.next(i)
      })
    )
  constructor(private httpClient: HttpClient) {
    this.updateInscriptions$.subscribe()
  }


  getInscriptionsList(): Observable<Inscription[]>{
    return this.httpClient.get<Inscription[]>(`${environment.baseUrl}/inscriptions?_expand=course&_expand=student`)
  }

  createInscription(data: NewInscription): Observable<void>{

    return this.httpClient.post<Inscription>(`${environment.baseUrl}/inscriptions`, data)
      .pipe(
        switchMap(()=>{
          return this.updateInscriptions$;
        })
      )
  }

  deleteInscription(idInscription: number): Observable<void>{
    return this.httpClient.delete<Inscription>(`${environment.baseUrl}/inscriptions/`+idInscription)
      .pipe(
        switchMap(()=>{
          return this.updateInscriptions$
        })
      )
  }
}
