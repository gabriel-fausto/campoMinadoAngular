import { ReveladorDeCelulas } from './ReveladorDeCelulas';
import { Injectable } from '@angular/core';
import { GerenciadorDeCelulas } from './GerenciadorDeCelulas';
import { Celula } from './Celula';
import { ConfiguracaoDeJogo } from './ConfiguracaoDeJogo';

@Injectable({
  providedIn: 'root',
})

export class Tabuleiro {
  configuracaoDeJogo: ConfiguracaoDeJogo;
  gerenciadorDeCelulas: GerenciadorDeCelulas;
  reveladorDeCelulas: ReveladorDeCelulas;
  quantidadeDeCelulas: number;
  celulas: Celula[];

  constructor(gerenciador: GerenciadorDeCelulas, revelador: ReveladorDeCelulas) {
    this.gerenciadorDeCelulas = gerenciador;
    this.reveladorDeCelulas = revelador;
  }

  inicializa(configuracao: ConfiguracaoDeJogo) {
    this.configuracaoDeJogo = configuracao;
    this.criaTabuleiro();
    this.gerenciadorDeCelulas.insereNumeroNasCelulas(this.celulas);
  }

  private criaTabuleiro(): void {
    this.celulas = this.gerenciadorDeCelulas.criaCelulas(
      this.configuracaoDeJogo.celulasNaHorizontal,
      this.configuracaoDeJogo.celulasNaVertical,
      this.configuracaoDeJogo.bombasNoTabuleiro)
  }

  revelarCelulasAoRedor(celula: Celula) {
    this.reveladorDeCelulas.revelarCelulasAoRedor(celula, this.celulas);
  }
}
