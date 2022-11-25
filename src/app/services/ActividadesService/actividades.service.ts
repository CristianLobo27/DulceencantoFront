import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getActividades(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/dulceencanto/actividades`)
  }

  public getActividadesById(actividadesId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/dulceencanto/actividades/${actividadesId}`)
  }
}
