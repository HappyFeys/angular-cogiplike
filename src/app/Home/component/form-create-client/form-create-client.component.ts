import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiServiceService } from '../../../Shared/service/api-service.service';
import { Client } from '../../models/client.models';

@Component({
  selector: 'app-form-create-client',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './form-create-client.component.html',
  styleUrl: './form-create-client.component.scss'
})
export class FormCreateClientComponent implements OnInit{

  @Output() createdClient: EventEmitter<Client> = new EventEmitter<Client>()

  clientForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private apiService: ApiServiceService){}

  onSubmit() {
    const client = this.clientForm.value
    client.dateNaissance = new Date(client.dateNaissance).toISOString().split('.')[0]
    console.log(client);
    this.createClient(client)
    this.clientForm.reset()
  }

  formatDateForBackend(date: Date): string {
    const pad = (n: number) => n < 10 ? '0' + n : n;
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = date.getMilliseconds().toString().padEnd(7, '0');
    
    // Récupérer le fuseau horaire en heures et minutes (+02:00)
    const offset = -date.getTimezoneOffset();
    const offsetHours = pad(Math.floor(Math.abs(offset) / 60));
    const offsetMinutes = pad(Math.abs(offset) % 60);
    const timezone = (offset >= 0 ? '+' : '-') + offsetHours + ':' + offsetMinutes;
  
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezone}`;
  }

  createClient(client: Client): void{
    this.apiService.createClient(client).subscribe({
      next: (createdClient) => {
        console.log("Client created:", createdClient);
        this.createdClient.emit(createdClient)
      },
      error: (error) => {
        console.error("Error creating client:", error);
      }
    })
  }

  ngOnInit(): void {
    this.clientForm = this.formBuilder.group({
      nom:['', Validators.required],
      prenom:['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tel:['', Validators.required],
      dateNaissance: [null, Validators.required],
      adresse:['', Validators.required],
      ville:['', Validators.required],
      codePostal:['', Validators.required],
      pays:['', Validators.required],
      dateInscription: this.formatDateForBackend(new Date()),
      statutCompte: true
    })  
  }

}
