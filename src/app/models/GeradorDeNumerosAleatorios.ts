import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class GeradorDeNumerosAleatorios {
  private numerosAleatorios: number[] = [];
  private numeroAleatorio: number = 0;

  gerarUmaLista(quantidade: number, numeroLimite: number): number[] {
    this.numerosAleatorios = [];
    this.numeroAleatorio = 0;
    for (var _i = 0; _i < quantidade; _i++) {

      this.numeroAleatorio = this.gerar(numeroLimite);

      if (!this.existirNaLista())
        this.numerosAleatorios.push(this.numeroAleatorio);
      else
        _i--;
    }

    return this.numerosAleatorios;
  }

  gerar(numeroLimite: number): number {
    return Math.floor(Math.random() * numeroLimite);
  }

  private existirNaLista(): boolean {
    return this.numerosAleatorios.indexOf(this.numeroAleatorio) > -1;
  }
}
