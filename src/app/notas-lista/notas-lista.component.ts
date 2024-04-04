import { Component } from '@angular/core';
import { NotasService } from '../notas-service';

@Component({
  selector: 'app-notas-lista',
  templateUrl: './notas-lista.component.html',
  styleUrls: ['./notas-lista.component.css'],
})
export class NotasListaComponent {
  constructor(private notasService: NotasService) {}

  get notas(): string[] {
    return this.notasService.notas;
  }
}
