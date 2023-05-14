import {Component, OnDestroy, OnInit} from '@angular/core';
import {iCourse} from "../../core/interfaces/iCourse";
import {MatDialog} from "@angular/material/dialog";
import {CursosService} from "./services/cursos.service";
import {MatTableDataSource} from "@angular/material/table";
import {CursosAbmComponent} from "./cursos-abm/cursos-abm.component";
import {map, Subscription} from "rxjs";
import {Router} from "@angular/router";
import {AuthService} from "../../auth/services/auth.service";


@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit, OnDestroy {

  isAdmin: Boolean;
  coursesSubscription: Subscription;
  dataSource = new MatTableDataSource<iCourse>();

  constructor(private matDialog: MatDialog, private cursosService: CursosService, private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
   this.loadCourses()
    this.validateAdmin()
  }

  ngOnDestroy(): void {
    this.coursesSubscription.unsubscribe()
  }

  displayedColumns: string[] = ['id', 'nombre', 'ver_detalle', 'delete', 'edit']

  loadCourses(){
    this.coursesSubscription = this.cursosService.courses$
      .subscribe({
          next: (courses) => {
            this.dataSource.data = courses
          }
        }
      )
  }

  aplicarFiltro(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value
    this.dataSource.filter = filterValue.trim()?.toLowerCase()
  }


  crearCurso(): void {
    const dialog = this.matDialog.open(CursosAbmComponent)

    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.cursosService.crearCurso(valor).subscribe();
      }
    })
  }

  editarCurso(cursoParaEditar: iCourse): void {
    const dialog = this.matDialog.open(CursosAbmComponent, {
      data: {
        cursoParaEditar
      }
    }
    );

    dialog.afterClosed().subscribe(
      (cursoEditado) => {
        if (cursoEditado){
        this.cursosService.editarCurso(cursoParaEditar.id, cursoEditado).subscribe()
        }
      }
    )
  }

  eliminarCurso(ev: number) {
   this.cursosService.eliminarCurso(ev).subscribe()
  }

  verDetalle(cursoId: number) {
    this.router.navigate(['dashboard', 'cursos', cursoId])
  }

  validateAdmin(){
    this.isAdmin = this.authService.validateAdmin()
  }

}
