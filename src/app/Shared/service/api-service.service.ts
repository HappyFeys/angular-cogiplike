import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Client } from '../../Home/models/client.models';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getAllClients(page: number, pageSize: number): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.apiUrl}/client/global?page=${page}&pageSize=${pageSize}`)
  }

  getClientDetails(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/client/specifique/${id}`)
  }

  createClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}/client/global`, client)
  }

  deleteClient(id:number): Observable<Client> {
    return this.http.delete<Client>(`${this.apiUrl}/client/global/${id}`)
  }
  
}
