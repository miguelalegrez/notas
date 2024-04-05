import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotasService } from '../notas-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nota-crear',
  standalone: true,
  templateUrl: './nota-crear.component.html',
  styleUrls: ['./nota-crear.component.css'],
  imports: [FormsModule, CommonModule],
})
export class NotaCrearComponent {
  nuevaNota: string = '';

  constructor(private notaService: NotasService) {}

  agregarNota() {
    this.notaService.notas.push(this.nuevaNota);
    this.nuevaNota = ''; // Limpiar el área de texto después de agregar la nota
  }
}
