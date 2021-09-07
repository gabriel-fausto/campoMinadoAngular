import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class GeradorDeNumerosAleatorios {

  gerarUmaLista(quantidade: number, numeroLimite: number): number[] {
    let _listaDeNumeros = [];
    let _numeroAleatorio = 0;
    for (var _i = 0; _i < quantidade; _i++) {

      _numeroAleatorio = this.gera(numeroLimite);

      if (!this.existeNaLista(_listaDeNumeros, _numeroAleatorio))
        _listaDeNumeros.push(_numeroAleatorio);
      else
        _i--;
    }

    return _listaDeNumeros;
  }

  gera(numeroLimite: number): number {
    return Math.floor(Math.random() * numeroLimite);
  }

  private existeNaLista(_lista: number[], valor: number): boolean {
    return _lista.indexOf(valor) > -1;
  }
}
