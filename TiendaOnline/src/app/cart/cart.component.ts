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
  aux : product[] = [];
  cantidad: number = 0;
  // result : number = this.aaa(); 
  cartList$: Observable<product[]>;

  constructor( private cart: ProductCartService,
    //entiendo que esto esta mal, pero no sabemos como hacer un foreach desde el pipe del html 
    private ProductsDataService:ProductDataService){
    this.cartList$ = cart.cartList.asObservable()
  }

  



  aaa(): void{
   console.log(this.cartList$);
  }
  //   let total = 0;
  //   let i  = 0; 
  //   while (i<this.aux.length){
  //     total+=this.aux[i].price*this.aux[i].quantity;
  //     i++;
  //   }
  //   return total;
  // }

//   total():number{
//     let total=0

//     for (let i in this.cartList$) {
//         total+=this.cartList$[i].price*this.cartList$[i].quantity;
//     }
//     return total;
//   }

  ngOnInit(): void {
  }
  

}
