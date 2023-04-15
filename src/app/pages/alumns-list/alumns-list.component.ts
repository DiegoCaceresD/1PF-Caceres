import {Component, EventEmitter, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Alumns} from "../../class/Alumns";
import {AlumnosAbmComponent} from "./alumnos-abm/alumnos-abm.component";
import {MatDialog} from "@angular/material/dialog";



@Component({
  selector: 'app-alumns-list',
  templateUrl: './alumns-list.component.html',
  styleUrls: ['./alumns-list.component.scss']
})
export class AlumnsListComponent implements OnInit {

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator ;

    alumns: Array<Alumns> = [
    {id: 1, nombre: "Juan", apellido: "Pérez", fechaNacimiento: new Date(2002, 5, 12)},
    {id: 2, nombre: "María", apellido: "González", fechaNacimiento: new Date(2003, 2, 22)},
    {id: 3, nombre: "Pedro", apellido: "López", fechaNacimiento: new Date(2002, 9, 7)},
    {id: 4, nombre: "Luisa", apellido: "Hernández", fechaNacimiento: new Date(2003, 11, 1)},
    {id: 5, nombre: "Jorge", apellido: "García", fechaNacimiento: new Date(2002, 7, 17)},
    {id: 6, nombre: "Ana", apellido: "Martínez", fechaNacimiento: new Date(2003, 4, 5)},
    {id: 7, nombre: "Miguel", apellido: "Sánchez", fechaNacimiento: new Date(2002, 12, 3)},
    {id: 8, nombre: "Sofía", apellido: "Ramírez", fechaNacimiento: new Date(2003, 8, 28)},
    {id: 9, nombre: "Pablo", apellido: "Gómez", fechaNacimiento: new Date(2002, 1, 9)},
    {id: 10, nombre: "Adriana", apellido: "Castillo", fechaNacimiento: new Date(2003, 6, 15)},
    {id: 11, nombre: "Carlos", apellido: "Díaz", fechaNacimiento: new Date(2002, 3, 28)},
    {id: 12, nombre: "Lucía", apellido: "Fernández", fechaNacimiento: new Date(2003, 10, 20)},
    {id: 13, nombre: "José", apellido: "Mendoza", fechaNacimiento: new Date(2002, 2, 16)},
    {id: 14, nombre: "Verónica", apellido: "Herrera", fechaNacimiento: new Date(2003, 9, 14)},
    {id: 15, nombre: "Ricardo", apellido: "Vargas", fechaNacimiento: new Date(2002, 4, 23)},
    {id: 16, nombre: "Isabel", apellido: "Fuentes", fechaNacimiento: new Date(2003, 1, 30)},
    {id: 17, nombre: "Martín", apellido: "Rojas", fechaNacimiento: new Date(2002, 10, 5)},
    {id: 18, nombre: "Laura", apellido: "Alvarado", fechaNacimiento: new Date(2003, 7, 11)},
    {id: 19, nombre: "Eduardo", apellido: "Núñez", fechaNacimiento: new Date(2002, 6, 18)},
    {id: 20, nombre: "Gabriela", apellido: "Guzmán", fechaNacimiento: new Date(2003)},

  ]


  displayedColumns: string[] = ['id', 'nombreCompleto'  , 'fechaNacimiento', 'DELETE'];
  dataSource = new MatTableDataSource <Alumns> (this.alumns);


  aplicarFiltro(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value
    this.dataSource.filter = filterValue.trim()?.toLowerCase()
  }

  abrirABM():void {
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

  delete(ev: number) {

      this.dataSource.data = this.dataSource.data.filter(
        (alumnoActual) => alumnoActual.id !== ev,
      );

    }
}
