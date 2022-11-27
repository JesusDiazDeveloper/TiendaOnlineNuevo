import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
    private _cartlist:product  []=[]
  cartList: BehaviorSubject<product[]>= new BehaviorSubject (this._cartlist);
  
  constructor() { }

  addToCart(p: product) {
    let item  =this._cartlist.find((v1) => v1.name == p.name) 
    if(!item){
      this._cartlist.push({...p});
    }
    else{
      item.quantity += p.quantity;
    }
    this.cartList.next(this._cartlist);
 }
  


}
