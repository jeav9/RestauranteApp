import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orden } from '../models/orden';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private url = "https://localhost:44364/api/orden";

  constructor(private httpClient: HttpClient) { }

  GetOrdenes() : Observable<Orden[]> {
    return this.httpClient.get<Orden[]>(this.url);
  }

  DeleteOrden(ordenId: number) {
    return this.httpClient.delete(`${this.url}/${ordenId}`)
  }

  CreateOrden(orden: Orden): Observable<Orden> {
    return this.httpClient.post<Orden>(`${this.url}`, orden);
  }
}
