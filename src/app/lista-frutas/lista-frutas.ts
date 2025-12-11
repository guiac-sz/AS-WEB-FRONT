import { Component } from '@angular/core';
import { FrutaService } from '../fruta-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-lista-frutas',
  imports: [RouterLink],
  templateUrl: './lista-frutas.html',
  styleUrl: './lista-frutas.css',
})
export class ListaFrutas {
  lista: string[];

  constructor(private frutaService: FrutaService) {
    this.lista = this.frutaService.listar();
  }

  remover(fruta: string) {
    this.frutaService.remover(fruta);
    this.lista = this.frutaService.listar();
  }

  concluir(fruta: string) {
    this.frutaService.marcarConsumida();
    this.lista = this.frutaService.listar();
  }
}

