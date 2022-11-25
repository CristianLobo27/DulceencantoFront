import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NogalService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getNogal(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/dulceencanto/nogal`)
  }

  public getNogalById(nogalId: number): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/dulceencanto/nogal/${nogalId}`)
  }
}
