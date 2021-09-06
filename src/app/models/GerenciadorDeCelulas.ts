import { Celula } from './Celula';
export class GerenciadorDeCelulas {
  _celulasAoRedor: Celula[];
  iniciaCelulasDoJogo(celulas: Celula[]) {

  }

  private devolveCelulasAoRedor(celula: Celula, celulas: Celula[]): Celula[] {
    this._celulasAoRedor = [];
    this.incluiCelulaEsquerda(celula, celulas);
    return this._celulasAoRedor;
  }

  incluiCelulaEsquerda(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelulaEsquerdaTopo(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), (celula._coordenadaVertical + 1));
  }

  incluiCelulaTopo(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelulaDireitaTopo(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelulaDireita(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelulaDireitaBaixo(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelulaBaixo(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelulaEsquerdaBaixo(celula: Celula, celulas: Celula[]) {
    this.incluiCelula(celulas, (celula._coordenadaHorizontal - 1), celula._coordenadaVertical);
  }

  incluiCelula(celulas: Celula[], posicaoHorizontal: number, posicaoVertical: number) {
    let celulaIndex = celulas.findIndex(c =>
      c._coordenadaVertical == posicaoHorizontal &&
      c._coordenadaHorizontal == posicaoVertical);
    if (celulaIndex > -1)
      this._celulasAoRedor.push(celulas[celulaIndex]);
  }
}
