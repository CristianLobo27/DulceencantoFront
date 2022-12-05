import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Nogal } from '../../models/nogal';

@Injectable({
  providedIn: 'root'
})
export class NogalService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getNogal(): Observable<Nogal[]>{
    return this.http.get<Nogal[]>(`${this.apiServerUrl}/dulceencanto/nogal`)
  }

  public getNogalById(nogalId: number): Observable<Nogal>{
    return this.http.get<Nogal>(`${this.apiServerUrl}/dulceencanto/nogal/${nogalId}`)
  }
}
