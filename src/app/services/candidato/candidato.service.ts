import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Candidato } from '../../models/candidato';

@Injectable({
  providedIn: 'root'
})
export class CandidatoService {

  baseUrl = 'http://localhost:8080/api/v1/candidatos';

  constructor(private http: HttpClient) { }  

  createCandidato(candidato: Candidato): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, candidato);
  }

  updateCandidato(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }  

  deleteCandidato(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCandidato(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getCandidatosList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
