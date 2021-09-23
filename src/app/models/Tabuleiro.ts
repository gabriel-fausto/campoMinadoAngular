import { Coordenada } from './Coordenada';
import { Celula } from './Celula';

export class Tabuleiro {
  private coordenadaAvaliada: Coordenada;
  private coordenadasVizinhas: Coordenada[];
  private celulasVizinhas: Celula[];

  constructor(private celulas: Celula[]) { }

  getCelulas() {
    return this.celulas;
  }

  public getCelulasVizinhas(coordenada: Coordenada): Celula[] {
    this.iniciaVariaveis(coordenada);
    this.carregarCelulasVizinhas();
    return this.celulasVizinhas;
  }

  private iniciaVariaveis(coordenada: Coordenada) {
    this.celulasVizinhas = [];
    this.coordenadasVizinhas = coordenada.getCoordenadasVizinhas();
  }

  private carregarCelulasVizinhas() {
    this.coordenadasVizinhas.forEach(coord => {
      this.coordenadaAvaliada = coord;
      this.incluirCelula();
    });
  }

  private incluirCelula() {
    let indexCelula = this.localizarIndexCelula();
    if (indexCelula > -1)
      this.celulasVizinhas.push(this.celulas[indexCelula]);
  }

  private localizarIndexCelula(): number {
    return this.celulas.findIndex(c =>
      Coordenada.isCoordenadasIguais(c.getCoordenada(), this.coordenadaAvaliada));
  }
}
