import { Celula } from './../../models/Celula';
import { ConfiguracaoDeJogo } from './../../models/ConfiguracaoDeJogo';
import { Tabuleiro } from './../../models/Tabuleiro';
import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: 'app-tabuleiro[configuracaoDeJogo]',
  templateUrl: './app-tabuleiro.component.html',
  styleUrls: ['./app-tabuleiro.component.css',]
})

export class AppTabuleiro implements OnChanges {

  @Input() configuracaoDeJogo: ConfiguracaoDeJogo;
  @Input() iniciarJogo: boolean = false;

  _tabuleiro: Tabuleiro;
  _jogoIniciado: boolean = false;
  tamanhoHorizontal: number = 0;
  tamanhoVertical: number = 0;

  constructor(tabuleiro: Tabuleiro) {
    this._tabuleiro = tabuleiro;
  }

  ngOnChanges() {
    if (this._jogoIniciado)
      return;
    if (this.iniciarJogo) {
      this._jogoIniciado = true;
      this._tabuleiro.inicializa(this.configuracaoDeJogo);
      this.tamanhoHorizontal = ((this.configuracaoDeJogo.celulasNaHorizontal * 21) + 32);
      this.tamanhoVertical = ((this.configuracaoDeJogo.celulasNaVertical * 21) + 32);
    }
  }

  clicouNa(celula: Celula) {
    celula.exibirTipo();
    if (celula.isBomba())
      return;
    else if (celula.isVazio()) {
      this._tabuleiro.revelarCelulasAoRedor(celula);
    }
  }

  celulasOrdenadas(): Celula[] {
    return this._tabuleiro.celulas.sort((a, b) => a._coordenadaHorizontal - a._coordenadaHorizontal || a._coordenadaVertical - b._coordenadaVertical)
  }
}

