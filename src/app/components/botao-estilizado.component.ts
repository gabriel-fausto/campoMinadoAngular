import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-botao-estilizado',
  templateUrl: './botao-estilizado.component.html',
  styleUrls: [
    './botao-estilizado.component.css',
  ]
})

export class BotaoEstilizado {
  @Input() valor = '';
  @Input() exibir = false;
}
