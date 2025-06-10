import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone: false,
})
export class CarritoPage implements OnInit {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.productos = this.carritoService.obtenerProductos();
  }

  vaciarCarrito() {
    this.carritoService.limpiarCarrito();
    this.productos = [];
  }
}
