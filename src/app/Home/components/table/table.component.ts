import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../models/client.models';
import { DatePipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../../Shared/service/api-service.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    NgFor,
    DatePipe
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {

  @Input() clients!: Client[];
  @Output() deletedClient : EventEmitter<number> = new EventEmitter<number>()

  constructor(private router: Router, private apiService: ApiServiceService) {}

  goToClient(id:number): void {
    this.router.navigateByUrl(`/client/${id}`)
  }

  deleteClient(id:number): void {
    this.apiService.deleteClient(id).subscribe({
      next: ()=> {
        this.deletedClient.emit(id)
      },
      error: (error)=> {
        console.error('Error deleting client:', error)
      }
    })
  }

}
