// nota.service.ts
// notas.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotasService {
  notas: string[] = [];

  agregarNota(nuevaNota: string) {
    this.notas.push(nuevaNota);
  }
}
/*
Cuando tienes datos que necesitan ser compartidos 
entre múltiples componentes, es una buena práctica
utilizar un servicio para gestionar esos datos*/
