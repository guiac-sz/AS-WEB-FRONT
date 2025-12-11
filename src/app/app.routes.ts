import { RouterModule, Routes } from '@angular/router';
import { CadastrarFruta } from './cadastrar-fruta/cadastrar-fruta';
import { ListaFrutas } from './lista-frutas/lista-frutas';

export const routes: Routes = [
    { path: 'cadastrar', component: CadastrarFruta },
    { path: 'lista', component: ListaFrutas }
];
