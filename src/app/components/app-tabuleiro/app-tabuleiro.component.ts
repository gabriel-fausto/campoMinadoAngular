import { Celula } from './../../models/Celula';
import { Tabuleiro } from './../../models/Tabuleiro';
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-tabuleiro[tabuleiro]',
  templateUrl: './app-tabuleiro.component.html',
  styleUrls: ['./app-tabuleiro.component.css',]
})

export class AppTabuleiro implements OnInit {
  @Input() tabuleiro: Tabuleiro;
  @Input() tamanhoHorizontal: number = 0;
  @Input() tamanhoVertical: number = 0;

  celulas: Celula[] = [];

  ngOnInit() {
    this.celulas = this.tabuleiro.getCelulas();
  }
}

