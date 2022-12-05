import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Actividades } from '../../models/actividades';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getActividades(): Observable<Actividades[]>{
    return this.http.get<Actividades[]>(`${this.apiServerUrl}/dulceencanto/actividades`)
  }

  public getActividadesById(actividadesId: number): Observable<Actividades>{
    return this.http.get<Actividades>(`${this.apiServerUrl}/dulceencanto/actividades/${actividadesId}`)
  }
}
