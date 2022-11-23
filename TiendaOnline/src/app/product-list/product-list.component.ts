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
      stock: 3,
      clearance: false,
      quantity: 0,
    },
    {
      name : "TV samsung YYYYY",
      price: 5000,
      description : "esta es la descripcion del tele",
      image: "assets/img/TVSamsung1.jpeg",
      stock: 4,
      clearance: true,
      quantity: 0,
      
    },
    {
      name : "TV samsung ZZZZ",
      price: 5000,
      description : "esta es la descripcion del tele",
      image: "assets/img/TVSamsung1.jpeg",
      stock: 0,
      clearance: false,
      quantity: 0,
    },

  ]

  upQuantity(product : product):void{
    if(product.quantity<product.stock)
      product.quantity++;
  }
  downQuantity(product : product):void{
    if(product.quantity>0)
      product.quantity--;
  }
  
  //No permite que la cantidad sea mayor a 
  verifyQuantity(e : any, product: product):void{
    if(product.quantity>product.stock){
      alert('Solicitud exede el stock disponible');
      product.quantity = product.stock;
    }
    else if(product.quantity<0){
      alert('Ingrese un numero mayor a 0');
      product.quantity=0;
    }
  }
  // Funcion que no me deja escribir otra cosa que no sea numero.
  onlyNumbersInInput(e : any, product: product):void{
    if(!((e.key)<=9 && (e.key)>=0) || (e.key==" ")){
      e.preventDefault();
  }
  }
}
