import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Cocina } from 'src/app/models/cocina';

@Injectable({
  providedIn: 'root'
})
export class CocinaService {

  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getCocina(): Observable<Cocina[]>{
    return this.http.get<Cocina[]>(`${this.apiServerUrl}/dulceencanto/cocina`)
  }

  public getCocinaById(cocinaId: number): Observable<Cocina>{
    return this.http.get<Cocina>(`${this.apiServerUrl}/dulceencanto/cocina/${cocinaId}`)
  }
}
