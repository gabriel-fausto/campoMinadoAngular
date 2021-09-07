import { ConfiguracaoDeJogo } from './../../models/ConfiguracaoDeJogo';
import { AfterContentChecked, ChangeDetectorRef, Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-configuracao[configuracaoDeJogo]',
  templateUrl: './app-configuracao.component.html',
  styleUrls: ['./app-configuracao.component.css',]
})

export class AppConfiguracao implements AfterContentChecked {
  @Input() configuracaoDeJogo: ConfiguracaoDeJogo;
  @Output() iniciarJogoEvent = new EventEmitter();

  componenteCarregado: boolean = false;

  ngOnChanges() {
    this.componenteCarregado = true;
  }
  constructor(private cdref: ChangeDetectorRef) { }


  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  iniciarJogo() {
    this.iniciarJogoEvent.emit();
  }

}

