import { Pipe, PipeTransform } from '@angular/core';
import { Pedido } from './pizzeria';

@Pipe({
  name: 'pedidoFilter'
})
export class PizzeriaFilterPipe implements PipeTransform {

  transform(value: Pedido[], args: string): Pedido[] {
    let filter: string = args ? args.toLowerCase() : '';

    return filter ? value.filter((pedido: Pedido) =>
      this.matchFilter(pedido.fecha, filter)
    ) : value;
  }

  matchFilter(fecha: string, filter: string): boolean {
    // Filtrar por mes
    if (filter.startsWith('mes:')) {
      const month = filter.split(':')[1];
      const pedidoMonth = new Date(fecha).getMonth() + 1;
      return pedidoMonth.toString() === month;
    }

    // Filtrar por día
    if (filter.startsWith('dia:')) {
      const day = filter.split(':')[1];
      const pedidoDay = fecha.substring(fecha.length - 2);
      const formattedDay = day.length === 1 ? '0' + day : day;
      return pedidoDay === formattedDay;
    }

    return true;
  }
}


