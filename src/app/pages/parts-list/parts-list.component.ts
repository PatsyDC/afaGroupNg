import { ProductosService } from 'app/core/services/productos.service';
import { IProducto } from './../../core/models/Producto.model';
import { Component, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parts-list',
  // standalone: true,
  // imports: [HttpClientModule],
  templateUrl: './parts-list.component.html',
  styleUrl: './parts-list.component.css'
})
export class PartsListComponent {
  productos?: IProducto[] = [];
  public listaProductos:IProducto[] = [];

  constructor(private productoService: ProductosService) {
  }

  ngOnInit(): void {
    this.productoService.allProductos().subscribe((data) => {
      console.log('data: ',data);
      this.productos = data;
    });
  }

}
