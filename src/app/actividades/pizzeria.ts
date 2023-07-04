export interface Pedido {
  cliente: Cliente;
  pedidos: DetallePedido[];
  fecha: string;
  total: number;
}

export interface DetallePedido {
  tamanio: string;
  ingredientes: string[];
  cantidad: number;
  subTotal: number;
}

export interface Cliente {
  nombre: string;
  direccion: string;
  telefono: string;
}
