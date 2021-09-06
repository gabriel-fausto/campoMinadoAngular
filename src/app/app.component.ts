import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  variavelLista: [any[], any[]]
  title = 'campoMinadoAngular';

  metodoQualquer() {
    this.variavelLista[0][0] = { nome: "teste", padrao: 2.1 };
  }
}
