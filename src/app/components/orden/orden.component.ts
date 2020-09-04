import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../services/orden.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html'
})
export class OrdenComponent implements OnInit {

  ordenList: {};

  constructor(private ordenService: OrdenService) {
    this.CargarOrdenes();
   }

  ngOnInit(): void {
  }

  DeleteOrden(ordenId: number){
    let resultado = confirm(`Desea eliminar la orden: ${ordenId}`);
    if(resultado) {
      this.ordenService.DeleteOrden(ordenId)
      .subscribe(resp => {
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
        console.log(error);
      })
    }
    
  }
