import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent {
  x1!:number;
  x2!:number;
  y1!:number;
  y2!:number;
  resultado!:number;


  //√((x_2-x_1)²+(y_2-y_1)²)
  calcular() {
    this.resultado = Math.sqrt((this.x2 - this.x1)*(this.x2 - this.x1)+(this.y2 - this.y1)*(this.y2 - this.y1));
  }
}
