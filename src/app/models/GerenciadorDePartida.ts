import { Tabuleiro } from './Tabuleiro';
import { RevelarService } from './services/revelarService';
import { ConfiguracaoDeJogo } from './ConfiguracaoDeJogo';
import { GeradorDeNumerosAleatorios } from './GeradorDeNumerosAleatorios';
import { Celula } from './Celula';
import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class GerenciadorDePartida implements OnDestroy {
  private celulasDoTabuleiro: Celula[] = [];
  private posicaoDasBombas: number[];
  private revelarSubscription: Subscription;
  private tabuleiro: Tabuleiro;

  getTabuleiro() {
    return this.tabuleiro;
  }
  /**
   *
   */
  constructor(public configuracaoDeJogo: ConfiguracaoDeJogo,
    private geradorDeNumerosAleatorios: GeradorDeNumerosAleatorios,
    private revelarService: RevelarService,
  ) {
    this.revelarSubscription = this.revelarService.onRevelar().subscribe(celula => this.revelarAoRedorDa(celula));
  }

  ngOnDestroy() {
    this.revelarSubscription.unsubscribe();
  }

  prepararNovaPartida(): void {
    this.sortearPosicaoDasBombas();
    this.criarCelulasDoTabuleiro();
    this.criarTabuleiro();
    this.inserirNumeroNasCelulas();
  }

  private sortearPosicaoDasBombas() {
    this.posicaoDasBombas = this.geradorDeNumerosAleatorios.gerarUmaLista(this.configuracaoDeJogo.bombasNoTabuleiro, this.configuracaoDeJogo.calculaTotalDeCelulas());
  }

  private criarCelulasDoTabuleiro() {
    let contadorDePosicao = 0;
    for (let _posicaoVertical = 0; _posicaoVertical < this.configuracaoDeJogo.celulasNaVertical; _posicaoVertical++) {
      for (let _posicaoHorizontal = 0; _posicaoHorizontal < this.configuracaoDeJogo.celulasNaHorizontal; _posicaoHorizontal++) {
        let c = new Celula(this.posicaoDasBombas, contadorDePosicao, _posicaoHorizontal, _posicaoVertical, this.revelarService);
        this.celulasDoTabuleiro.push(c);
        contadorDePosicao++;
      }
    }
  }

  private inserirNumeroNasCelulas(): void {
    for (let celula of this.celulasDoTabuleiro) {
      celula.incluirNumeroDeBombasAoRedor(this.tabuleiro.getCelulasVizinhas(celula.getCoordenada()));
    }
  }

  private criarTabuleiro(): void {
    this.tabuleiro = new Tabuleiro(this.celulasDoTabuleiro);
  }

  public revelarAoRedorDa(celula: Celula): void {
    let celulasAoRedor = this.tabuleiro.getCelulasVizinhas(celula.getCoordenada());
    this.revelarCelulas(celulasAoRedor);
  }

  private revelarCelulas(celulasAoRedor: Celula[]): void {
    celulasAoRedor.forEach(celula => celula.revelar());
  }
}
