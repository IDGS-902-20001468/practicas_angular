import { Component } from '@angular/core';

@Component({
  selector: 'app-resistencia',
  templateUrl: './resistencia.component.html',
  styleUrls: ['./resistencia.component.css']
})
export class ResistenciaComponent {

  c1:string ='';
  c2:string ='';
  c3:string ='';
  color:string = '';
  v: number = 0;
  v1: string = '';
  v2: string = '';
  v3: number = 0;
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
    'negro',
    'cafe',
    'rojo',
    'naranja',
    'amarillo',
    'verde',
    'azul',
    'violeta',
    'gris',
    'blanco'
  ];

  calcularVar():void{
    this.obtenervalor(this.c1Seleccionado)
    this.v1 = String(this.v)
    this.c1 = this.color
    this.obtenervalor(this.c2Seleccionado)
    this.v2 = String(this.v)
    this.c2 = this.color
    this.obtenervalor(this.c3Seleccionado)
    this.valor = Number(this.v1+this.v2)*this.v3
    this.c3 = this.color
    this.calcular()

  };

  calcular() {
    switch (this.radSeleccionado) {
      case 'plata' : this.valorp = this.valor + (this.valor*0.05)
      this.valorn = this.valor - (this.valor*0.05)
                    break;
      case 'oro' : this.valorp = this.valor + (this.valor*0.1)
      this.valorn = this.valor - (this.valor*0.1)
                     break;
    }
  }

  obtenervalor(c:string):void{
      switch(c){
        case 'negro':
          this.color = 'black'
          this.v3 = 1
          this.v = 0
          break;
          case 'cafe':
            this.color = 'brown'
            this.v3 = 10
            this.v = 1
            break;
          case 'rojo':
            this.color = 'red'
            this.v3 = 100
            this.v = 2
            break;
          case 'naranja':
            this.color = 'orange'
            this.v3 = 1000
            this.v = 3
            break;
          case 'amarillo':
            this.color = 'yellow'
            this.v3 = 10000
            this.v = 3
            break;
          case 'verde':
            this.color = 'green'
            this.v3 = 100000
            this.v = 4
            break;
          case 'azul':
            this.color = 'blue'
            this.v3 = 1000000
            this.v = 5
            break;
          case 'violeta':
            this.color = 'violet'
            this.v3 = 10000000
            this.v = 6
            break;
          case 'gris':
            this.color = 'grey'
            this.v3 = 100000000
            this.v = 7
            break;
          case 'blanco':
            this.color = 'white'
            this.v3 = 1000000000
            this.v = 8
            break;
    }

  }

}
