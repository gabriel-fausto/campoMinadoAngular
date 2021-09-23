
export class Coordenada {
  constructor(private coordenadaX: number, private coordenadaY: number) { }

  getCoordenadaX(): number {
    return this.coordenadaX;
  }

  getCoordenadaY(): number {
    return this.coordenadaY;
  }

  getCoordenadasVizinhas(): Coordenada[] {
    let coordenadasVizinhas: Coordenada[] = [];
    coordenadasVizinhas.push(this.getCoordenadaEsquerda());
    coordenadasVizinhas.push(this.getCoordenadaEsquerdaTopo());
    coordenadasVizinhas.push(this.getCoordenadaTopo());
    coordenadasVizinhas.push(this.getCoordenadaDireitaTopo());
    coordenadasVizinhas.push(this.getCoordenadaDireita());
    coordenadasVizinhas.push(this.getCoordenadaDireitaBaixo());
    coordenadasVizinhas.push(this.getCoordenadaBaixo());
    coordenadasVizinhas.push(this.getCoordenadaEsquerdaBaixo());
    return coordenadasVizinhas;
  }

  private getCoordenadaEsquerda() {
    return new Coordenada(this.coordenadaX - 1, this.coordenadaY);
  }

  private getCoordenadaEsquerdaTopo() {
    return new Coordenada(this.coordenadaX - 1, this.coordenadaY + 1);
  }

  private getCoordenadaTopo() {
    return new Coordenada(this.coordenadaX, this.coordenadaY + 1);
  }

  private getCoordenadaDireitaTopo() {
    return new Coordenada(this.coordenadaX + 1, this.coordenadaY + 1);
  }

  private getCoordenadaDireita() {
    return new Coordenada(this.coordenadaX + 1, this.coordenadaY);
  }

  private getCoordenadaDireitaBaixo() {
    return new Coordenada(this.coordenadaX + 1, this.coordenadaY - 1);
  }

  private getCoordenadaBaixo() {
    return new Coordenada(this.coordenadaX, this.coordenadaY - 1);
  }

  private getCoordenadaEsquerdaBaixo() {
    return new Coordenada(this.coordenadaX - 1, this.coordenadaY - 1);
  }

  public static isCoordenadasIguais(coordenada1: Coordenada, coordenada2: Coordenada): boolean {
    return coordenada1.getCoordenadaX() == coordenada2.getCoordenadaX() &&
      coordenada1.getCoordenadaY() == coordenada2.getCoordenadaY();
  }
}
