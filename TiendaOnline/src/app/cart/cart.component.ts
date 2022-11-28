import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCartService } from '../product-cart.service';
import { ProductDataService } from '../product-data.service';
import { product } from '../product-list/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  productArr : product[] = [];
  cartList$: Observable<product[]>;
  // totalPrice$: Observable <number>;
  totalPrice : number = 0;
  result : number = 0;

  constructor( private cart: ProductCartService,
    private ProductsDataService:ProductDataService){
    this.cartList$ = cart.cartList.asObservable();
    this.cart.obsPrice.subscribe(data=>{
      this.totalPrice=data;
    })
  }

  
  ngOnInit(): void {
    // this.totalPrice$.subscribe(t => {this.total} = t;)    
  }

  aaa(){

  }

  
}
