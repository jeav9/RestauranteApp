import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Producto } from 'src/app/models/producto';
import { DetalleOrden } from 'src/app/models/detalleOrden';
import { Orden } from 'src/app/models/orden';
import { OrdenService } from 'src/app/services/orden.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-orden',
  templateUrl: './crear-orden.component.html',
  styleUrls: ['./crear-orden.component.css']
})
export class CrearOrdenComponent implements OnInit {
  orden: Orden;
  productoList: Producto[];
  detalleOrden: DetalleOrden;
  DetallesOrden: DetalleOrden [];

  constructor(private productoService: ProductoService,
    private ordenService: OrdenService,
    private router: Router) { 

    this.orden = new Orden(); 
    this.detalleOrden = new DetalleOrden();
    this.DetallesOrden = [];

    this.productoService.GetProductos()
    .subscribe(resp => {
      this.productoList = resp;
      console.log(this.productoList);
    });
  }

  ngOnInit(): void {
  }

  Agregar(){
    this.DetallesOrden.push(this.detalleOrden);
    console.log(this.DetallesOrden);
    this.detalleOrden = new DetalleOrden();
  }

  Crear(){
    this.orden.detalleOrdenes = this.DetallesOrden;
    this.ordenService.CreateOrden(this.orden)
    .subscribe(s => {
      this.router.navigate(['/orden']);
    },error => {
      console.log(error);
    })
  }

}
