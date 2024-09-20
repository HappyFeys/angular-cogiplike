import { Component, OnInit } from '@angular/core';
import { Client } from '../../../Home/models/client.models';
import { ApiServiceService } from '../../../Shared/service/api-service.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgIf } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';
import path from 'path';

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.scss'
})
export class DetailsPageComponent implements OnInit {

  client!: Client
  isLoading: boolean = true
  error: string | null = null
  isEmailEditing = false;
  isTelEditing = false;
  isAddressEditing = false;
  isStatusEditing = false;

  newEmail : string = ''
  newTel : string = ''
  newAddress : string = ''
  newVille : string = ''
  newPays : string = ''
  newCodePostal : string = ''
  newStatut : boolean= false

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

  showInput(label:string): void{
    switch(label){
      case 'email':
        this.isEmailEditing = !this.isEmailEditing;
        break;
      case 'tel':
        this.isTelEditing = !this.isTelEditing;
        break;
      case 'adresse':
        this.isAddressEditing = !this.isAddressEditing;
        break;
      case 'statutCompte':
        this.isStatusEditing = !this.isStatusEditing;
        break;
    }
  }

  updateEmail(){
    const patches= [{
      op:"replace",
      path:"/email",
      value:this.newEmail
    }]
    this.apiService.updateClient(patches, this.client.id).subscribe({
      next:(updatedClient)=>{
        console.log(updatedClient);
        this.loadClient()
        this.isEmailEditing = false
      },
      error:(err)=>{
        this.error= "Erreur lors de la mise a jour de l'email"
        console.log('err', err);
      }
    })
  }

  updateTel(){
    const patches = [{
      op:"replace",
      path:"/tel",
      value:this.newTel
    }]
    this.apiService.updateClient(patches, this.client.id).subscribe({
      next:(updatedClient)=>{
        console.log('Tel updated', updatedClient);
        this.loadClient()
        this.isTelEditing = false
      },
      error:(err)=>{
        this.error='Erreur lors de la mise à jour du tel'
        console.log('err', err);
      }
    })
  }

  updateAddress(){
    const patches = [
      {op:"replace", path:"/adresse", value:this.newAddress},
      {op:"replace", path:"/ville", value:this.newVille},
      {op:"replace", path:"/codePostal", value:this.newCodePostal},
      {op:"replace", path:"/pays", value:this.newPays},
    ]
    this.apiService.updateClient(patches, this.client.id).subscribe({
      next:(updatedClient)=>{
        console.log('adresse update', updatedClient);
        this.loadClient()
        this.isAddressEditing = false
      },
      error:(err)=>{
        this.error="Erreur lors de la mise à jour de l'adresse"
        console.log("err", err);
      }
    })
  }

  updateStatut(){
    const patches = [{
      op:"replace",
      path:"/statutCompte",
      value:this.newStatut
    }]
    this.apiService.updateClient(patches, this.client.id).subscribe({
      next:(updatedClient)=>{
        console.log('Statut update', updatedClient);
        this.loadClient()
        this.isStatusEditing = false
      },
      error:(err)=>{
        this.error="Erreur lors de la mise à jour du statut"
        console.log("err", err);
      }
    })
  }
  
  ngOnInit(): void {
    this.loadClient()
  }

}
