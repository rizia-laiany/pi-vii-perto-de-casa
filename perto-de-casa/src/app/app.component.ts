import { Component } from '@angular/core';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { ListaCategoriasComponent } from './componentes/lista-categorias/lista-categorias.component';


@Component({
  selector: 'app-root',
  imports: [
    CabecalhoComponent,
    RodapeComponent,
    ListaCategoriasComponent,
    MatToolbarModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'perto-de-casa';
}
