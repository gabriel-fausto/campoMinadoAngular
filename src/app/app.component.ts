import { ConfiguracaoDeJogo } from './models/ConfiguracaoDeJogo';
import { Tabuleiro } from './models/Tabuleiro';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _configuracaoDeJogo: ConfiguracaoDeJogo;
  teste: string;
  jogoIniciado: boolean = false;
  constructor(configuracaoDeJogo: ConfiguracaoDeJogo) {
    this._configuracaoDeJogo = configuracaoDeJogo;
  }

  iniciarJogo() {
    this.jogoIniciado = true;
  }
}
