import { Component } from '@angular/core';
import { Categorias } from './categorias';

@Component({
  selector: 'app-categorias',
  imports: [],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {

  categoria: Categorias = {
    titulo: "Roupas e Acessórios",
    tipo: "Categorias",
    imagem: "styler.png"
  }
}
