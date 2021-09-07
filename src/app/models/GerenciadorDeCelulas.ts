import { GeradorDeNumerosAleatorios } from './GeradorDeNumerosAleatorios';
import { Injectable } from '@angular/core';
import { Celula } from './Celula';

@Injectable({
  providedIn: 'root',
})

export class GerenciadorDeCelulas {
  _geradorDeNumerosAleatorios: GeradorDeNumerosAleatorios;
  _celulasAoRedor: Celula[];

  /**
   *
   */
  constructor(geradorDeNumerosAleatorios: GeradorDeNumerosAleatorios) {
    this._geradorDeNumerosAleatorios = geradorDeNumerosAleatorios
  }

  criaCelulas(celulasNaHorizontal: number, celulasNaVertical: number, quantidadeDeBombas: number): Celula[] {
    let celulas: Celula[] = [];
    let posicaoDasBombas = this._geradorDeNumerosAleatorios.gerarUmaLista(quantidadeDeBombas, (celulasNaHorizontal * celulasNaVertical));
    let contadorDePosicao = 0;
    for (let _posicaoHorizontal = 0; _posicaoHorizontal < celulasNaHorizontal; _posicaoHorizontal++) {
      for (let _posicaoVertical = 0; _posicaoVertical < celulasNaVertical; _posicaoVertical++) {
        celulas.push(new Celula(posicaoDasBombas, contadorDePosicao, _posicaoHorizontal, _posicaoVertical));
      }
    }
    return celulas
  }

  insereNumeroNasCelulas(celulasDoTabuleiro: Celula[]): void {
    for (let celula of celulasDoTabuleiro) {
      celula.incluirNumeroDeBombasAoRedor(this.devolveCelulasAoRedor(celula, celulasDoTabuleiro));
    }
  }

  protected devolveCelulasAoRedor(celula: Celula, celulasDoTabuleiro: Celula[]): Celula[] {
    this._celulasAoRedor = [];
    this.incluiCelulaEsquerda(celula, celulasDoTabuleiro);
    this.incluiCelulaEsquerdaTopo(celula, celulasDoTabuleiro);
    this.incluiCelulaTopo(celula, celulasDoTabuleiro);
    this.incluiCelulaDireitaTopo(celula, celulasDoTabuleiro);
    this.incluiCelulaDireita(celula, celulasDoTabuleiro);
    this.incluiCelulaDireitaBaixo(celula, celulasDoTabuleiro);
    this.incluiCelulaBaixo(celula, celulasDoTabuleiro);
    this.incluiCelulaEsquerdaBaixo(celula, celulasDoTabuleiro);
    return this._celulasAoRedor;
  }

  private incluiCelulaEsquerda(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  private incluiCelulaEsquerdaTopo(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, (celula._coordenadaHorizontal - 1), (celula._coordenadaVertical + 1));
  }

  private incluiCelulaTopo(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, celula._coordenadaHorizontal, (celula._coordenadaVertical + 1));
  }

  private incluiCelulaDireitaTopo(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, (celula._coordenadaHorizontal + 1), (celula._coordenadaVertical + 1));
  }

  private incluiCelulaDireita(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, (celula._coordenadaHorizontal + 1), celula._coordenadaVertical);
  }

  private incluiCelulaDireitaBaixo(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, (celula._coordenadaHorizontal + 1), (celula._coordenadaVertical - 1));
  }

  private incluiCelulaBaixo(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, celula._coordenadaHorizontal, (celula._coordenadaVertical - 1));
  }

  private incluiCelulaEsquerdaBaixo(celula: Celula, celulasDoTabuleiro: Celula[]) {
    this.incluiCelula(celulasDoTabuleiro, (celula._coordenadaHorizontal - 1), (celula._coordenadaVertical - 1));
  }

  private incluiCelula(celulasDoTabuleiro: Celula[], posicaoHorizontal: number, posicaoVertical: number) {
    let celulaIndex = celulasDoTabuleiro.findIndex(c =>
      c._coordenadaVertical == posicaoHorizontal &&
      c._coordenadaHorizontal == posicaoVertical);
    if (celulaIndex > -1)
      this._celulasAoRedor.push(celulasDoTabuleiro[celulaIndex]);
  }
}
