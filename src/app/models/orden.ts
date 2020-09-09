import { DetalleOrden } from './detalleOrden';
export class Orden {
    id: number;
    clientName: string;
    cashierName: string;
    detalleOrdenes: DetalleOrden [];
}