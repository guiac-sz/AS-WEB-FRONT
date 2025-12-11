import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FrutaService {
  lista: string[] = [];
  contador = 0;

  listar(): string[] {
    return this.lista;
  }

  adicionar(fruta: string) {
    this.lista.push(fruta);
    this.contador++;
  }

  remover(fruta: string) {
    this.lista = this.lista.filter((f) => f !== fruta);
  }

  marcarConsumida() {
    this.lista = this.lista.map((f) => f + ' (concluída)');
  }
}
