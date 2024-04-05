import { Component } from '@angular/core';
import { NotasService } from './notas-service';
import { NotaCrearComponent } from './nota-crear/nota-crear.component';
import { NotasListaComponent } from './notas-lista/notas-lista.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotasService],
  imports: [NotaCrearComponent, NotasListaComponent],
})
export class AppComponent {
  constructor(private notasService: NotasService) {}
}
