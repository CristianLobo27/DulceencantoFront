import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Almendro } from '../../models/almendro';

@Injectable({
  providedIn: 'root'
})
export class AlmendroService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAlmendro(): Observable<Almendro[]>{
    return this.http.get<Almendro[]>(`${this.apiServerUrl}/dulceencanto/almendro`)
  }

  public getAlmendroById(almendroId: number): Observable<Almendro>{
    return this.http.get<Almendro>(`${this.apiServerUrl}/dulceencanto/almendro/${almendroId}`)
  }
}
