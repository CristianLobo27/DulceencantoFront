import { Injectable } from "@angular/core";
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from '../../models/reserva';

@Injectable({
    providedIn: 'root'
  })
  export class ReservaService {
  
    private apiServerUrl=environment.apiBaseUrl;
  
    constructor(private http: HttpClient) { }
  
    public registrarReserva(reserva:Reserva): Observable<Reserva>{
      return this.http.post<Reserva>(`${this.apiServerUrl}/dulceencanto/reserva`, reserva)
    }

  }