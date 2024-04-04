import { Component, NgModule } from '@angular/core';
import { NotasService } from './notas-service';
import { NotaCrearComponent } from './nota-crear/nota-crear.component';
import { NotasListaComponent } from './notas-lista/notas-lista.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  providers: [NotasService, NotasListaComponent],
  imports: [NotaCrearComponent],
})
export class AppComponent {
  constructor(private notasService: NotasService) {}
}
