import { GerenciadorDeCelulas } from './GerenciadorDeCelulas';
import { Celula } from './Celula';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class ReveladorDeCelulas extends GerenciadorDeCelulas {
  revelarCelulasAoRedor(celula: Celula, celulasDoTabuleiro: Celula[]): void {
    let celulasAoRedor = this.devolveCelulasAoRedor(celula, celulasDoTabuleiro);
    for (let celulaVizinha of celulasAoRedor) {
      if (celulasDoTabuleiro.find(c => c == celulaVizinha).isRelevada())
        continue;
      if (celulaVizinha.isNumero())
        celulasDoTabuleiro.find(c => c == celulaVizinha).exibirTipo();
      else if (celulaVizinha.isVazio()) {
        celulasDoTabuleiro.find(c => c == celulaVizinha).exibirTipo();
        this.revelarCelulasAoRedor(celulaVizinha, celulasDoTabuleiro);
      }
    }
  }
}
