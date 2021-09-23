import { GerenciadorDePartida } from './models/GerenciadorDePartida';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  _gerenciadorDePartida: GerenciadorDePartida;
  teste: string;
  jogoIniciado: boolean = false;

  constructor(gerenciadorDePartida: GerenciadorDePartida) {
    this._gerenciadorDePartida = gerenciadorDePartida;
  }

  iniciarJogo() {
    this.jogoIniciado = true;
    this._gerenciadorDePartida.prepararNovaPartida();
  }
}
