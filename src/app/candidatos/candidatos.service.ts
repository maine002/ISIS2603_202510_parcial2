import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidatos } from './candidatos';

@Injectable({
  providedIn: 'root'
})
export class CandidatosService {
  private baseUrl = 'https://raw.githubusercontent.com/k-garces/ISIS2603_202510_parcial2/refs/heads/main/jsons/candidates.json';

  constructor(private http: HttpClient) {}

  getCandidatos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/candidates.json`);
  }

  getCandidatoDetalle(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/candidates/${id}.json`);
  }
}
