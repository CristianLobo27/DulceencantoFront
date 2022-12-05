import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BusquedaService {

  private _historial: string[]=[];
  private _historialC: number[]=[];

  get historial(){
    return [...this._historial]
  }

  get historialC(){
    return [...this._historialC]
  }

  buscarTipo(query: string){
    this._historial.unshift(query);
    console.log(this._historial)
  }

  buscarCantidad(query: number){
    this._historialC.unshift(query);
  }
}
