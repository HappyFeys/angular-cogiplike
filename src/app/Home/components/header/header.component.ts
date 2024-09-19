import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() modal : EventEmitter<void> = new EventEmitter<void>();

  showModal() : void {
    this.modal.emit()
    console.log("event emitted");
  }

}

