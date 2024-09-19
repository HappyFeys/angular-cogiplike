import { Component, OnInit } from '@angular/core';
import { Client } from '../../../Home/models/client.models';
import { ApiServiceService } from '../../../Shared/service/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    DatePipe,
    NgIf
  ],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent implements OnInit {

  client!: Client
  isLoading: boolean = true
  error: string | null = null

  constructor(private apiService: ApiServiceService, private activatedRoute: ActivatedRoute){}

  loadClient(){
    const clientId = this.activatedRoute.snapshot.paramMap.get('id');
    if (clientId) {
      this.apiService.getClientDetails(Number(clientId)).subscribe({
        next: (data: Client) => {
          this.client = data;
          this.isLoading = false;
        },
        error: (err) => {
          this.error = 'Erreur lors de la récupération des données.';
          this.isLoading = false;
        }
      });
    }
  }
  
  ngOnInit(): void {
    this.loadClient()
  }

}
