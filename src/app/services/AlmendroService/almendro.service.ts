import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlmendroService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAlmendro(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/dulceencanto/almendro`)
  }

  public getAlmendroById(almendroId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/dulceencanto/almendro/${almendroId}`)
  }
}
