import {Component, EventEmitter, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Alumno} from "../../core/class/Alumno";
import {AlumnosAbmComponent} from "./alumnos-abm/alumnos-abm.component";
import {MatDialog} from "@angular/material/dialog";
import {AlumnosService} from "./services/alumnos.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-alumns-list',
  templateUrl: './alumns-list.component.html',
  styleUrls: ['./alumns-list.component.scss']
})
export class AlumnsListComponent implements OnInit, OnDestroy {

  alumnos: Alumno[] = [];
  camada: string;
  constructor(private matDialog: MatDialog,  private alumnosService: AlumnosService, private router: Router)
  {}

  ngOnInit(): void {
    this.cargarAlumnos()
    this.alumnosService.getComisión()
      .then((datos) => {
        this.camada = datos
      })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnDestroy(): void{

  };
  @ViewChild(MatPaginator) paginator: MatPaginator ;


  cargarAlumnos(): Alumno[] {
    this.alumnosService.getListaAlumnos().subscribe(
      (alumnos) =>{
      this.alumnos = alumnos;
    })
      return this.alumnos
  }


  displayedColumns: string[] = ['id', 'nombreCompleto'  , 'fechaNacimiento','ver_detalle', 'delete', 'edit'];
  dataSource = new MatTableDataSource <Alumno> (this.cargarAlumnos());


  aplicarFiltro(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value
    this.dataSource.filter = filterValue.trim()?.toLowerCase()
  }

  crearAlumno():void {
   const dialog = this.matDialog.open(AlumnosAbmComponent)

    dialog.afterClosed().subscribe((valor) => {
      if (valor){
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
          id: this.dataSource.data.length +1
          }
        ]
      }
    })
  }

  editarAlumno(alumnoParaEditar: Alumno):void {
    const dialog = this.matDialog.open(AlumnosAbmComponent, {
      data: {
        alumnoParaEditar
      }
    });

    dialog.afterClosed()
      .subscribe((alumnoEditado) => {
      if (alumnoEditado){
        this.dataSource.data = this.dataSource.data.map(
          (alumnoActual) => alumnoActual.id === alumnoParaEditar.id ? ({...alumnoActual, ...alumnoEditado}) : alumnoActual,
        )
      }
    })
  }

  eliminarAlumno(ev: number) {

      this.dataSource.data = this.dataSource.data.filter(
        (alumnoActual) => alumnoActual.id !== ev,
      );

    }

  verDetalle(alumnoId: number) {
    this.router.navigate(['dashboard','alumnos', alumnoId])
  }
}
