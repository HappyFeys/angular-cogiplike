import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { TableComponent } from '../../components/table/table.component';
import { ApiServiceService } from '../../../Shared/service/api-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Client } from '../../models/client.models';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    TableComponent,
    NgIf,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit{

  clients: Client[]= [];
  isLoading: boolean = true
  error: string | null = null

  constructor(private apiService: ApiServiceService){ }
  
  loadClients(): void{
    this.apiService.getAllClients(1, 10).subscribe({
      next: (data: Client[]) => {
        this.clients = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erreur lors de la sélection des données.';
        this.isLoading = false;
      }
    })
  }

  ngOnInit(): void {
    this.loadClients();
  }
  
}
