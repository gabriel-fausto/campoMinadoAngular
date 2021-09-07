import { Tabuleiro } from './models/Tabuleiro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'campoMinadoAngular';
  texto = "";
  objetos = [
    { exibir: false, valor: 1 },
    { exibir: false, valor: 2 },
    { exibir: false, valor: 3 },
    { exibir: false, valor: 4 },
    { exibir: false, valor: 5 },
    { exibir: false, valor: 6 },
    { exibir: true, valor: 7 },
  ]

  clicou(obj) {
    let obj2 = { exibir: false, valor: 8 }
    this.objetos.push(obj2);
    obj2.exibir = true;
  }
}
