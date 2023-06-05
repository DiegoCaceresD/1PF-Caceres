import {Component, OnDestroy, OnInit} from '@angular/core';
import {InscripcionService} from "./services/inscripcion.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {InscripcionesAbmComponent} from "./inscripciones-abm/inscripciones-abm.component";
import {NewInscription} from "../../core/interfaces/Inscription";
import {Observable, Subscription} from "rxjs";
import {State} from "./store/inscripciones.reducer";
import {Store} from "@ngrx/store";
import {selectInscripcionesState} from "./store/inscripciones.selectors";
import {InscripcionesActions} from "./store/inscripciones.actions";


@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit, OnDestroy {
  state$: Observable<State>
  inscriptionSubscription: Subscription;
  dataSource = new MatTableDataSource;
  displayedColumns: String[] =['inscripcionID', 'alumno', 'cursos', 'delete', 'edit', ]

  constructor(private inscriptionServices: InscripcionService, private matDialog: MatDialog, private store: Store) {
  this.state$ = this.store.select(selectInscripcionesState)
  }

  ngOnDestroy(): void {
    this.store.dispatch(InscripcionesActions.loadInscripciones())
        this.inscriptionSubscription.unsubscribe()
    }

  ngOnInit() {
    this.loadInscriptions()
  }

  loadInscriptions(){
    this.inscriptionSubscription =  this.inscriptionServices.inscriptions$
      .subscribe({
        next:(inscriptions)=>{
          this.dataSource.data = inscriptions;
        }
      })
  }

  createInscription() {
    const dialog = this.matDialog.open(InscripcionesAbmComponent)
    dialog.afterClosed()
      .subscribe((valor)=>{
        let data: NewInscription = {studentId: valor.student.id, courseId: valor.course.id};
      this.inscriptionServices.createInscription(data).subscribe()
    })
    this.inscriptionServices.inscriptions$.subscribe()
  }

  deleteInscription(ev:number){
    this.inscriptionServices.deleteInscription(ev).subscribe()
  }
}


