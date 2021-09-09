import { RevelarService } from './services/revelarService';
import { ConfiguracaoDeJogo } from './ConfiguracaoDeJogo';
import { GeradorDeNumerosAleatorios } from './GeradorDeNumerosAleatorios';
import { Celula } from './Celula';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GerenciadorDePartida {
  _geradorDeNumerosAleatorios: GeradorDeNumerosAleatorios;
  _celulasAoRedor: Celula[];
  _configuracaoDeJogo: ConfiguracaoDeJogo;
  _celulasDoTabuleiro: Celula[] = [];
  _posicaoDasBombas: number[];
  _revelarSubscription: Subscription;
  _revelarService: RevelarService;
  /**
   *
   */
  constructor(configuracaoDeJogo: ConfiguracaoDeJogo, geradorDeNumerosAleatorios: GeradorDeNumerosAleatorios, revelarService: RevelarService) {
    this._geradorDeNumerosAleatorios = geradorDeNumerosAleatorios;
    this._configuracaoDeJogo = configuracaoDeJogo;
    this._revelarService = revelarService;
    this._revelarSubscription = this._revelarService.onRevelar().subscribe(celula => this.propagaRevelacao(celula));
  }

  preparaNovaPartida(): void {
    this.sorteiaPosicaoDasBombas();
    this.criaCelulasDoTabuleiro();
    this.insereNumeroNasCelulas();
  }

  sorteiaPosicaoDasBombas() {
    this._posicaoDasBombas = this._geradorDeNumerosAleatorios.gerarUmaLista(this._configuracaoDeJogo.bombasNoTabuleiro, this._configuracaoDeJogo.calculaTotalDeCelulas());
  }

  criaCelulasDoTabuleiro() {
    let contadorDePosicao = 0;
    for (let _posicaoVertical = 0; _posicaoVertical < this._configuracaoDeJogo.celulasNaVertical; _posicaoVertical++) {
      for (let _posicaoHorizontal = 0; _posicaoHorizontal < this._configuracaoDeJogo.celulasNaHorizontal; _posicaoHorizontal++) {
        let c = new Celula(this._posicaoDasBombas, contadorDePosicao, _posicaoHorizontal, _posicaoVertical, this._revelarService);
        this._celulasDoTabuleiro.push(c);
        contadorDePosicao++;
      }
    }
  }

  insereNumeroNasCelulas(): void {
    for (let celula of this._celulasDoTabuleiro) {
      celula.incluirNumeroDeBombasAoRedor(this.devolveCelulasAoRedor(celula));
    }
  }

  protected devolveCelulasAoRedor(celula: Celula): Celula[] {
    this._celulasAoRedor = [];
    this.incluiCelulaEsquerda(celula);
    this.incluiCelulaEsquerdaTopo(celula);
    this.incluiCelulaTopo(celula);
    this.incluiCelulaDireitaTopo(celula);
    this.incluiCelulaDireita(celula);
    this.incluiCelulaDireitaBaixo(celula);
    this.incluiCelulaBaixo(celula);
    this.incluiCelulaEsquerdaBaixo(celula);
    return this._celulasAoRedor;
  }

  private incluiCelulaEsquerda(celula: Celula,) {
    this.incluiCelula((celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  private incluiCelulaEsquerdaTopo(celula: Celula) {
    this.incluiCelula((celula._coordenadaHorizontal - 1), (celula._coordenadaVertical + 1));
  }

  private incluiCelulaTopo(celula: Celula) {
    this.incluiCelula(celula._coordenadaHorizontal, (celula._coordenadaVertical + 1));
  }

  private incluiCelulaDireitaTopo(celula: Celula) {
    this.incluiCelula((celula._coordenadaHorizontal + 1), (celula._coordenadaVertical + 1));
  }

  private incluiCelulaDireita(celula: Celula,) {
    this.incluiCelula((celula._coordenadaHorizontal + 1), celula._coordenadaVertical);
  }

  private incluiCelulaDireitaBaixo(celula: Celula) {
    this.incluiCelula((celula._coordenadaHorizontal + 1), (celula._coordenadaVertical - 1));
  }

  private incluiCelulaBaixo(celula: Celula) {
    this.incluiCelula(celula._coordenadaHorizontal, (celula._coordenadaVertical - 1));
  }

  private incluiCelulaEsquerdaBaixo(celula: Celula) {
    this.incluiCelula((celula._coordenadaHorizontal - 1), (celula._coordenadaVertical - 1));
  }

  private incluiCelula(posicaoHorizontal: number, posicaoVertical: number) {
    let celulaIndex = this._celulasDoTabuleiro.findIndex(c =>
      c._coordenadaVertical == posicaoVertical &&
      c._coordenadaHorizontal == posicaoHorizontal);
    if (celulaIndex > -1)
      this._celulasAoRedor.push(this._celulasDoTabuleiro[celulaIndex]);
  }

  propagaRevelacao(celula: Celula): void {
    celula.exibirTipo();
    if (celula.isBomba())
      return;
    else if (celula.isVazio()) {
      this.revelarCelulasAoRedor(celula);
    }
  }

  private revelarCelulasAoRedor(celula: Celula): void {
    let celulasAoRedor = this.devolveCelulasAoRedor(celula);
    for (let celulaVizinha of celulasAoRedor) {
      if (celulaVizinha.isRelevada())
        continue;
      if (celulaVizinha.isNumero())
        celulaVizinha.exibirTipo();
      else if (celulaVizinha.isVazio()) {
        celulaVizinha.exibirTipo();
        this.revelarCelulasAoRedor(celulaVizinha);
      }
    }
  }
}
