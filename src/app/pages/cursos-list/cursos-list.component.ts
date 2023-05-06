import {Component, OnDestroy, OnInit} from '@angular/core';
import {iCurso} from "../../core/interfaces/iCurso";
import {MatDialog} from "@angular/material/dialog";
import {CursosService} from "./services/cursos.service";
import {MatTableDataSource} from "@angular/material/table";
import {CursosAbmComponent} from "./cursos-abm/cursos-abm.component";
import {map, Subscription} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit, OnDestroy {


  cursos: iCurso[] = []
  cursosSuscription: Subscription;
  dataSource = new MatTableDataSource<iCurso>();

  constructor(private matDialog: MatDialog, private cursosService: CursosService, private router: Router) {
  }

  ngOnInit(): void {
   this.cargarCursos()
  }
  cargarCursos(){
    this.cursosSuscription = this.cursosService.getListaCursos()
      .subscribe({
          next: (cursos) => {
            console.log(cursos)
            this.dataSource.data = cursos
          }
        }
      )
  }

  ngOnDestroy(): void {
    this.cursosSuscription.unsubscribe()
  }


  displayedColumns: string[] = ['id', 'nombre', 'ver_detalle', 'delete', 'edit']

  aplicarFiltro(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement)?.value
    this.dataSource.filter = filterValue.trim()?.toLowerCase()
  }


  crearCurso(): void {
    const dialog = this.matDialog.open(CursosAbmComponent)

    dialog.afterClosed().subscribe((valor) => {
      if (valor) {
        this.cursosService.crearCurso(valor).subscribe(curso => this.cursos.push(curso));
      }
    })

    this.cargarCursos()

  }

  editarCurso(cursoParaEditar: iCurso): void {
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

}
