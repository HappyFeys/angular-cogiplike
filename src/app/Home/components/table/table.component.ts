import { Component, Input } from '@angular/core';
import { Client } from '../../models/client.models';
import { DatePipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  goToClient(id:number): void {
    this.router.navigateByUrl(`/client/${id}`)
  }

}
