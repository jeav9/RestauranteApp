import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private url = "https://localhost:44364/api/orden";

  constructor(private httpClient: HttpClient) { }

  GetOrdenes() {
    return this.httpClient.get(this.url);
  }

  DeleteOrden(ordenId: number) {
    return this.httpClient.delete(`${this.url}/${ordenId}`)
  }
}
