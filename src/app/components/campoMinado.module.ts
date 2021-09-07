import { CustomValidatorsModule } from './../validators/custom-validators.module';
import { NgModule } from '@angular/core';
import { AppConfiguracao } from './app-configuracao/app-configuracao.component';
import { AppTabuleiro } from './app-tabuleiro/app-tabuleiro.component';
import { appCelula } from './app-celula/app-celula.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    appCelula,
    AppTabuleiro,
    AppConfiguracao,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CustomValidatorsModule,
  ],
  exports: [
    appCelula,
    AppTabuleiro,
    AppConfiguracao,]
})

export class CampoMinadoModule {

}
