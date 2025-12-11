import { Component } from '@angular/core';
import { FrutaService } from '../fruta-service';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-fruta',
  imports: [RouterLink, FormsModule],
  templateUrl: './cadastrar-fruta.html',
  styleUrl: './cadastrar-fruta.css',
})
export class CadastrarFruta {
  constructor(private frutaService: FrutaService) {}
  fruta = '';

  salvar() {
    this.frutaService.adicionar(this.fruta);
    this.fruta = '';
  }
}