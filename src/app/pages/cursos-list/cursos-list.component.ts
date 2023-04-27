import {Component, OnDestroy, OnInit} from '@angular/core';
import {iCurso} from "../../core/interfaces/iCurso";
import {MatDialog} from "@angular/material/dialog";
import {CursosService} from "./services/cursos.service";
import {MatTableDataSource} from "@angular/material/table";
import {CursosAbmComponent} from "./cursos-abm/cursos-abm.component";
import {map} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit, OnDestroy {


  cursos: iCurso[] = []

  constructor(private matDialog: MatDialog, private cursosService: CursosService,private router: Router) {
  }

  ngOnInit(): void {
    this.cargarCursos()
  }

  ngOnDestroy(): void {
  }

  displayedColumns: string[] = ['id', 'nombre','ver_detalle', 'delete', 'edit']
  dataSource = new MatTableDataSource<iCurso>(this.cargarCursos());

  aplicarFiltro(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value
    this.dataSource.filter = filterValue.trim()?.toLowerCase()
  }

  cargarCursos(): iCurso[] {
    this.cursosService.getListaCursos()
      .subscribe(
        (cursos) => {
          this.cursos = cursos
        }
      )
    return this.cursos
  }

  crearCurso(): void {
    const dialog = this.matDialog.open(CursosAbmComponent)

    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.dataSource.data = [
          ...this.dataSource.data,
          {
            ...valor,
            id: this.dataSource.data[this.dataSource.data.length - 1].id + 1
          }
        ]

      }
    })

  }

  editarCurso(cursoParaEditar: iCurso): void {
    const dialog = this.matDialog.open(CursosAbmComponent, {
      data: {
        cursoParaEditar
      }
    });

    dialog.afterClosed().subscribe(
      (cursoEditado) => {
        if (cursoEditado) {
          this.dataSource.data = this.dataSource.data.map(
            (cursoActual) => cursoActual.id === cursoParaEditar.id ? ({...cursoActual, ...cursoEditado}) : cursoActual,
          )
        }
      }
    )
  }

  eliminarCurso(ev: number) {
    console.log(ev)
    this.dataSource.data = this.dataSource.data.filter(
      (cursoActual) => cursoActual.id !== ev,
    )
  }

  verDetalle(cursoId: number){
    this.router.navigate(['dashboard', 'cursos', cursoId])
  }

}
