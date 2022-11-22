import { Component } from '@angular/core';
import { product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  title = "Productos";

  products : product [] = [
    {
      name : "TV samsung X",
      price: 5000,
      description : "esta es la descripcion del tele",
      image: "assets/img/TVSamsung1.jpeg",
      stock: 0,
      clearance: false,
    },
    {
      name : "TV samsung YYYYY",
      price: 5000,
      description : "esta es la descripcion del tele",
      image: "assets/img/TVSamsung1.jpeg",
      stock: 24,
      clearance: true,

    },
    {
      name : "TV samsung ZZZZ",
      price: 5000,
      description : "esta es la descripcion del tele",
      image: "assets/img/TVSamsung1.jpeg",
      stock: 45,
      clearance: false,
    },

  ]

}
