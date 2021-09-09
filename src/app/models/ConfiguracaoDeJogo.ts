import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})

export class ConfiguracaoDeJogo {
  celulasNaVertical: number = 10;
  celulasNaHorizontal: number = 10;
  bombasNoTabuleiro: number = 10;
  totalDeCelulas: number = this.celulasNaHorizontal * this.celulasNaVertical;


}
