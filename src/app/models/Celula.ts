import { Coordenada } from './Coordenada';
import { RevelarService } from './services/revelarService';
import { TipoDeCelula } from './TipoDeCelula';

export class Celula {
  private tipo: TipoDeCelula;
  private numeroDeBombasAoRedor: number;
  private revelouValor: boolean;
  private coordenada: Coordenada;
  private revelarService: RevelarService;

  getNumeroDeBombasAoRedor(): number {
    return this.numeroDeBombasAoRedor;
  }

  getCoordenada() {
    return this.coordenada;
  }

  isBomba(): boolean {
    return this.tipo === TipoDeCelula.BOMBA;
  }

  isNumero(): boolean {
    return this.tipo === TipoDeCelula.NUMERO;
  }

  isVazio(): boolean {
    return this.tipo === TipoDeCelula.VAZIO;
  }

  isRelevada(): boolean {
    return this.revelouValor;
  }

  constructor(posicaoDasBombas: number[], posicaoDaCelula: number, coordenadaHorizontal: number, coordenadaVertical: number, revelarService: RevelarService) {
    this.tipo = this.escolheTipo(posicaoDasBombas, posicaoDaCelula);
    this.revelouValor = false;
    this.coordenada = new Coordenada(coordenadaHorizontal, coordenadaVertical);
    this.revelarService = revelarService;
  }

  private escolheTipo(posicaoDasBombas: number[], posicaoDaCelula: number): TipoDeCelula {
    if (posicaoDasBombas.indexOf(posicaoDaCelula) > -1) {
      return TipoDeCelula.BOMBA;
    }
    return TipoDeCelula.VAZIO;
  }

  incluirNumeroDeBombasAoRedor(celulasAoRedor: Celula[]) {
    let contadorDeBombas = 0;

    if (this.isBomba())
      return;

    for (let celula of celulasAoRedor) {
      if (celula.isBomba())
        contadorDeBombas++;
    }
    if (contadorDeBombas > 0) {
      this.tipo = TipoDeCelula.NUMERO;
      this.numeroDeBombasAoRedor = contadorDeBombas;
    }
  }

  revelar(): void {
    if (this.isRelevada())
      return;
    this.revelarValor();
    if (this.podeRevelarAoRedor())
      this.revelarService.revelarAoRedor(this);
  }

  private revelarValor() {
    this.revelouValor = true;
  }

  private podeRevelarAoRedor(): boolean {
    return !this.isBomba() && this.isVazio();
  }
}


