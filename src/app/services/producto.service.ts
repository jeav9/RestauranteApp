import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = "https://localhost:44364/api/product";
  constructor(private httpClient: HttpClient) { }

  GetProductos(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.url);
  }
}
