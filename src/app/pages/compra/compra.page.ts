import { Component } from '@angular/core';
import { XiaomiPage } from '../xiaomi/xiaomi.page';  // Ajusta la ruta según tu estructura

@Component({
  selector: 'app-compra',
  templateUrl: 'compra.page.html',
  styleUrls: ['compra.page.scss'],
})
export class CompraPage {
  constructor(private xiaomiPage: XiaomiPage) {}

  get carrito() {
    return this.xiaomiPage.carrito;
  }

  get totalCarrito() {
    return this.xiaomiPage.totalCarrito;
  }
}
