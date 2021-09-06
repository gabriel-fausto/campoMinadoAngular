import { TipoDeCelula } from './TipoDeCelula';

export class Celula {
  _tipo: TipoDeCelula;
  _numero: number;
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

  /**
   *
   */
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
}


