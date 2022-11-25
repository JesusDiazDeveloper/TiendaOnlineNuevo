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
      image: "assets/img/TVSamsung1.jpeg",
      stock: 3,
      clearance: false,
      quantity: 0,
    },
    {
      name : "TV samsung YYYYY",
      price: 5000,
      image: "assets/img/TVSamsung1.jpeg",
      stock: 4,
      clearance: true,
      quantity: 0,
      
    },
    {
      name : "TV samsung ZZZZ",
      price: 5000,
      image: "assets/img/TVSamsung1.jpeg",
      stock: 0,
      clearance: false,
      quantity: 0,
    },

  ]

}
