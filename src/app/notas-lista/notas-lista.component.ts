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
}
