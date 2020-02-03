import { Injectable } from '@angular/core';
import { Cliente } from './cliente.js';
import {of, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndpoint: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  getClentes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlEndpoint);
  }
}
