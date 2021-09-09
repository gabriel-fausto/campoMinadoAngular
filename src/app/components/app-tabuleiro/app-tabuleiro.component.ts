import { Celula } from './../../models/Celula';
import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-tabuleiro[celulas]',
  templateUrl: './app-tabuleiro.component.html',
  styleUrls: ['./app-tabuleiro.component.css',]
})

export class AppTabuleiro {
  @Input() celulas: Celula[];
  @Input() tamanhoHorizontal: number = 0;
  @Input() tamanhoVertical: number = 0;
}

