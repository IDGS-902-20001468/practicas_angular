import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {

  v: number = 0;
  v1: string = '';
  v2: string = '';
  v3: number = 0;
  v4: string = '';
  valor:number = 0;
  valorp:number = 0;
  valorn:number = 0;
  c1Seleccionado: string = '';
  c2Seleccionado: string = '';
  c3Seleccionado: string = '';
  radSeleccionado: string = '';
  radioOpciones = [
    'plata',
    'oro'
  ]
  colores = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white'
  ];

  calcularVar():void{
    this.obtenervalor(this.c1Seleccionado)
    this.v1 = String(this.v)
    this.obtenervalor(this.c2Seleccionado)
    this.v2 = String(this.v)
    this.obtenervalor(this.c3Seleccionado)
    this.valor = Number(this.v1+this.v2)*this.v3
    this.calcular()

  };

  calcular() {
    switch (this.radSeleccionado) {
      case 'plata' :

      this.valorp = this.valor + (this.valor*0.1)
      this.valorn = this.valor - (this.valor*0.1)
      this.radSeleccionado = 'silver';
      this.v4 = '10 %'
                    break;
      case 'oro' :
      this.valorp = this.valor + (this.valor*0.05)
      this.valorn = this.valor - (this.valor*0.05)

      this.radSeleccionado = 'gold';
      this.v4 = '5 %'
                     break;
    }
  }

  obtenervalor(c:string):void{
      switch(c){
        case 'black':
          this.v3 = 1
          this.v = 0
          break;
          case 'brown':
            this.v3 = 10
            this.v = 1
            break;
          case 'red':
            this.v3 = 100
            this.v = 2
            break;
          case 'orange':
            this.v3 = 1000
            this.v = 3
            break;
          case 'yellow':
            this.v3 = 10000
            this.v = 3
            break;
          case 'green':
            this.v3 = 100000
            this.v = 4
            break;
          case 'blue':
            this.v3 = 1000000
            this.v = 5
            break;
          case 'violet':
            this.v3 = 10000000
            this.v = 6
            break;
          case 'grey':
            this.v3 = 100000000
            this.v = 7
            break;
          case 'white':
            this.v3 = 1000000000
            this.v = 8
            break;
    }

  }

}
