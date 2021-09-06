import { Celula } from './Celula';
import { GeradorDeNumerosAleatorios } from './GeradorDeNumerosAleatorios';
import { ConfiguracaoDeJogo } from './ConfiguracaoDeJogo';

export class Tabuleiro {
  configuracaoDeJogo: ConfiguracaoDeJogo;
  geradorDeNumerosAleatorios: GeradorDeNumerosAleatorios;
  quantidadeDeCelulas: number;
  celulas: Celula[];

  constructor(configuracao: ConfiguracaoDeJogo, gerador: GeradorDeNumerosAleatorios) {
    this.configuracaoDeJogo = configuracao;
    this.geradorDeNumerosAleatorios = gerador;
    this.quantidadeDeCelulas = this.configuracaoDeJogo.calculaTotalDeCelulas();
    this.iniciaTabuleiro();
  }

  iniciaTabuleiro(): void {
    let posicaoDasBombas = this.geradorDeNumerosAleatorios.gerarUmaLista(this.configuracaoDeJogo.bombasNoTabuleiro, this.quantidadeDeCelulas);
    let contadorDePosicao = 0;
    for (let _posicaoHorizontal = 0; _posicaoHorizontal < this.configuracaoDeJogo.celulasNaHorizontal; _posicaoHorizontal++) {
      for (let _posicaoVertical = 0; _posicaoVertical < this.configuracaoDeJogo.celulasNaVertical; _posicaoVertical++) {
        this.celulas.push(new Celula(posicaoDasBombas, contadorDePosicao, _posicaoHorizontal, _posicaoVertical));
      }
    }
  }
}
