import {Component, EventEmitter, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../core/class/Student";
import {AlumnosAbmComponent} from "./alumnos-abm/alumnos-abm.component";
import {MatDialog} from "@angular/material/dialog";
import {AlumnosService} from "./services/alumnos.service";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";



@Component({
  selector: 'app-alumns-list',
  templateUrl: './alumns-list.component.html',
  styleUrls: ['./alumns-list.component.scss']
})
export class AlumnsListComponent implements OnInit, OnDestroy {

  alumnos: Student[] = [];
  alumnosSubscription: Subscription;
  constructor(private matDialog: MatDialog,  private alumnosService: AlumnosService, private router: Router)
  {}

  ngOnInit(): void {
    this.cargarAlumnos()
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy(): void{
    this.alumnosSubscription.unsubscribe()
  };
  @ViewChild(MatPaginator) paginator: MatPaginator ;

  displayedColumns: string[] = ['id', 'nombreCompleto'  , 'fechaNacimiento','ver_detalle', 'delete', 'edit'];
  dataSource = new MatTableDataSource;


  aplicarFiltro(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value
    this.dataSource.filter = filterValue.trim()?.toLowerCase()
  }

  cargarAlumnos(){
    this.alumnosSubscription = this.alumnosService.students$
      .subscribe({
        next: (cursos) =>{
          this.dataSource.data = cursos
        }
      })
  }

  crearAlumno():void {
   const dialog = this.matDialog.open(AlumnosAbmComponent)

    dialog.afterClosed().subscribe((valor) => {
      if (valor){
        this.alumnosService.crearAlumno(valor).subscribe()
      }
    })
  }

  editarAlumno(alumnoParaEditar: Student):void {
    const dialog = this.matDialog.open(AlumnosAbmComponent, {
      data: {
        alumnoParaEditar
      }
    });

    dialog.afterClosed()
      .subscribe((alumnoEditado) => {
      if (alumnoEditado){

        this.alumnosService.editarAlumno(alumnoParaEditar.id, alumnoEditado).subscribe()
      }
    })
  }

  eliminarAlumno(ev: number) {

     this.alumnosService.eliminarAlumno(ev).subscribe()
    }

  verDetalle(alumnoId: number) {
    this.router.navigate(['dashboard','alumnos', alumnoId])
  }
}
