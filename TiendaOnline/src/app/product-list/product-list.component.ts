import { Component } from '@angular/core';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  title = "Productos";

  products : product [] = [];


 constructor( private cart: ProductCartService,
  private productsDataService:ProductDataService
  ){
 }

 ngOnInit():void{
  this.productsDataService.getAll()
  .subscribe(products => this.products = products);
 }


  addToCart(p:product):void{
    this.cart.addToCart(p);
    p.stock -= p.quantity;
    
    p.quantity=0;
  }
}
