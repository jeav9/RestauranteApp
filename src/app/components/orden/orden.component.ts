import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { Router } from '@angular/router';
import { Orden } from 'src/app/models/orden';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html'
})
export class OrdenComponent implements OnInit {

  ordenList: Orden[];

  constructor(private ordenService: OrdenService,
      private router: Router) {
    this.CargarOrdenes();
   }

  ngOnInit(): void {
  }

  DeleteOrden(ordenId: number){
    let resultado = confirm(`Desea eliminar la orden: ${ordenId}`);
    if(resultado) {
      this.ordenService.DeleteOrden(ordenId)
      .subscribe(resp => {
        console.log(resp);
        this.CargarOrdenes();
      },
      error => {
        console.error(error);
      });
    }
  }

    CargarOrdenes() {
      this.ordenService.GetOrdenes().subscribe(res => {
        this.ordenList = res;
      },
      error => {
        this.ordenList = [];
        console.log(error);
      })
    }

    CrearOrden(){
      this.router.navigate(['/crearOrden']);
    }
    
  }
