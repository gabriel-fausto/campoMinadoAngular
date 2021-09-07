import { Celula } from './../../models/Celula';
import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-celula[celula]',
  templateUrl: './app-celula.component.html',
  styleUrls: ['./app-celula.component.css',]
})

export class appCelula {
  @Input() celula: Celula;


  determinaClasse() {
    if (!this.celula.isRelevada()) {
      return 'celulaNaoRevelada';
    }
    if (this.celula.isBomba()) {
      return 'bombaAqui';
    }
    else if (this.celula.isVazio()) {
      return 'nenhumaBomba';
    }
    else {
      if (this.celula._numeroDeBombasAoRedor < 4) {
        return 'poucasBombas';
      }
      else if (this.celula._numeroDeBombasAoRedor < 7) {
        return 'algumasBombas';
      }
      else {
        return 'muitasBombas';
      }
    }
  }
}

