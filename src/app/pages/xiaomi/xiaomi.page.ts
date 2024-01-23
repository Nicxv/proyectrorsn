// xiaomi.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-xiaomi',
  templateUrl: 'xiaomi.page.html',
  styleUrls: ['xiaomi.page.scss'],
})
export class XiaomiPage {
  carrito: any[] = [];
  totalCarrito: number = 0;

  agregarAlCarrito(nombre: string, imagen: string, precio: number) {
    this.carrito.push({ nombre, imagen, precio });
    this.totalCarrito += precio;
  }

  eliminarDelCarrito(index: number) {
    if (index >= 0 && index < this.carrito.length) {
      const precioEliminado = this.carrito[index].precio;
      this.carrito.splice(index, 1);
      this.totalCarrito -= precioEliminado;
    }
  }
}
