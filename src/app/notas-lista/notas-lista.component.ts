import { Component } from '@angular/core';
import { NotasService } from '../notas-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas-lista',
  standalone: true,
  templateUrl: './notas-lista.component.html',
  styleUrls: ['./notas-lista.component.css'],
  imports: [CommonModule, FormsModule],
})
export class NotasListaComponent {
  constructor(private notasService: NotasService) {}

  get notas(): string[] {
    return this.notasService.notas;
  }

  deleteNota(nota: string) {
    const index = this.notasService.notas.indexOf(nota); // Encuentra el índice de la nota
    if (index !== -1) {
      // Verifica si se encontró la nota
      this.notasService.notas.splice(index, 1); // Elimina la nota del array en la posición index y elimina 1 elemento
    }
  }
}
