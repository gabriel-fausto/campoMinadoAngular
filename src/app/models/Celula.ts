import { TipoDeCelula } from './TipoDeCelula';

export class Celula {
  _tipo: TipoDeCelula;
  _numeroDeBombasAoRedor: number;
  _exibirTipo: boolean;
  _coordenadaHorizontal: number;
  _coordenadaVertical: number;

  isBomba(): boolean {
    return this._tipo === TipoDeCelula.BOMBA;
  }

  isNumero(): boolean {
    return this._tipo === TipoDeCelula.NUMERO;
  }

  isVazio(): boolean {
    return this._tipo === TipoDeCelula.VAZIO;
  }

  isRelevada(): boolean {
    return this._exibirTipo;
  }

  constructor(posicaoDasBombas: number[], posicaoDaCelula: number, coordenadaHorizontal: number, coordenadaVertical: number) {
    this._tipo = this.escolheTipo(posicaoDasBombas, posicaoDaCelula);
    this._exibirTipo = false;
    this._coordenadaHorizontal = coordenadaHorizontal;
    this._coordenadaVertical = coordenadaVertical;
  }

  exibirTipo() {
    this._exibirTipo = true;
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
      this._tipo = TipoDeCelula.NUMERO;
      this._numeroDeBombasAoRedor = contadorDeBombas;
    }
  }
}


