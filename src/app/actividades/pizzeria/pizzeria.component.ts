import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente, Pedido, DetallePedido } from '../pizzeria';
@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  filterValue: string = '';
  sumaTotal:number=0;
  mostrarTabla: boolean=false;
  cliente: Cliente = {
    nombre: '',
    direccion: '',
    telefono: ''
  };
  dp: DetallePedido[] = [];
  today:string = this.getCurrentDate();

  pedido: Pedido = {
    cliente: this.cliente,
    pedidos: this.dp,
    total: 0,
    fecha: this.today
  };
  listaPedidos: Pedido[] = [];


  getCurrentDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  }


  public ingredientes = ["Jamón", "Piña", "Champiñones"]

  pizzasForm!:FormGroup;
  constructor(private readonly fb:FormBuilder){
    this.pizzasForm = this.initForm();
  }

  initForm(): FormGroup {
    let ingredientesFormArray = this.fb.array([]);
    this.ingredientes.forEach(() => {
      ingredientesFormArray.push(this.fb.control(false));
    });
    return this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      tamanio: ['Chica', [Validators.required]],
      ingredientes: ingredientesFormArray,
      cantidad: ['', [Validators.required]],
      fecha: [this.today, [Validators.required]],
    });
  }

  agregarDetalle():void{

    const detalle:DetallePedido={
    tamanio: '',
    ingredientes: [],
    cantidad: 0,
    subTotal: 0,
    }

      const ingredientesSeleccionados = this.pizzasForm.get('ingredientes')?.value;
      const ingredientesSeleccionadosArray = this.ingredientes.filter((_, i) => ingredientesSeleccionados[i]);
    detalle.ingredientes =ingredientesSeleccionadosArray

    this.cliente.nombre = this.pizzasForm.get('nombre')?.value;
    this.cliente.direccion = this.pizzasForm.get('direccion')?.value;

    this.cliente.telefono = this.pizzasForm.get('telefono')?.value;
    detalle.tamanio = this.pizzasForm.get('tamanio')?.value;
    detalle.cantidad = this.pizzasForm.get('cantidad')?.value;
    this.pedido.fecha = this.today;

    if(detalle.cantidad <=  0){
      alert('Debes de ingresar una cantidad valida')
  }
  else{
    let costIngrediente = 0;

    for (const item of detalle.ingredientes) {
      costIngrediente += 10;
    }

    switch (detalle.tamanio) {
      case "Chica":
        detalle.subTotal += detalle.cantidad * (40 + costIngrediente);
        break;
      case "Mediana":
        detalle.subTotal += detalle.cantidad * (80 + costIngrediente);
        break;
      case "Grande":
        detalle.subTotal += detalle.cantidad * (120 + costIngrediente);
        break;
    }

    this.dp.push({
      ingredientes: detalle.ingredientes,
      cantidad: detalle.cantidad,
      tamanio: detalle.tamanio,
      subTotal: detalle.subTotal,
    });}
  }

 calcularTotal(): void {
  if (this.dp.length === 0) {
    alert('Agregue al menos una pizza antes de finalizar el pedido.');
    return;
  }

  if (confirm(`Total: ${this.obtenerTotal()} \n  Deseas finalizar el pedido?`)) {
    this.pedido.pedidos = this.dp
    this.pedido.cliente = this.cliente
    for (const detalle of this.pedido.pedidos) {
      this.pedido.total += detalle.subTotal;
    }

      this.listaPedidos.push(this.pedido)
      this.sumaTotal += this.pedido.total
      this.mostrarTabla = true;
      this.pizzasForm.reset();
      this.limpiarListas();
    }
  }

  obtenerTotal(): number{
    let sTotal = 0;
    for (const detalle of this.pedido.pedidos) {
      sTotal += detalle.subTotal;
    }
    return sTotal;
  }


  eliminarDetalle(index: number): void{
    this.pedido.pedidos.splice(index,1);
  }

  limpiarListas(): void {
    this.cliente = {
      nombre: '',
      direccion: '',
      telefono: ''}
    this.dp = [];
    this.pedido ={
      cliente: this.cliente,
      pedidos: this.dp,
      total: 0,
      fecha: this.today
    };
  }

}


