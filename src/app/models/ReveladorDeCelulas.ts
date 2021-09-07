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
      if (celulaVizinha.isRelevada())
        continue;
      if (celulaVizinha.isNumero())
         celulaVizinha.exibirTipo();
      else if (celulaVizinha.isVazio()) {
        celulaVizinha.exibirTipo();
        this.revelarCelulasAoRedor(celulaVizinha, celulasDoTabuleiro);
      }
    }
  }
}
