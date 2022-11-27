import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartList$: Observable< product[]>;

  constructor( private cart: ProductCartService){
    this.cartList$ = cart.cartList.asObservable();
  }
  

}
