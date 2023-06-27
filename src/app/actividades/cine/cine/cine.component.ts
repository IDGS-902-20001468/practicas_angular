import { Component } from '@angular/core';

@Component({
  selector: 'app-cine',
  templateUrl: './cine.component.html',
  styleUrls: ['./cine.component.css']
})
export class CineComponent {

  cine: Cine = {
    nombre: '',
    numero_bol: 0,
    numero_compradores: 0,
    tarjeta: '',
    resultado: '',
  };
  max_boletos: number = 0;

  calcular(): void {
    this.max_boletos = this.cine.numero_compradores * 7;

    if (this.cine.numero_bol > this.max_boletos) {
      this.cine.resultado = 'No se pueden comprar más de 7 boletos por persona';
      return;
    }
    this.cine.resultado = this.cine.numero_bol * 12;

    if (this.cine.numero_bol > 5) {
      this.cine.resultado = this.cine.resultado - this.cine.resultado * 0.15;
    } else if (this.cine.numero_bol >= 3 && this.cine.numero_bol <= 5) {
      this.cine.resultado = this.cine.resultado - this.cine.resultado * 0.10;
    }

    if (this.cine.tarjeta == 'si') {
      this.cine.resultado = this.cine.resultado * 0.90;
    }
      this.cine.resultado = this.cine.resultado + ' MXN'

  }
}

interface Cine {
  nombre: string;
  numero_bol: number;
  numero_compradores: number;
  tarjeta: string;
  resultado: number | string;
}


