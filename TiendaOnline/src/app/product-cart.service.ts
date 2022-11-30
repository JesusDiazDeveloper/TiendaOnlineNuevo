import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {
  //creo una variable privada
  private _cartlist:product  []=[];
  private _totalPrice: number = 0;
  
  //creo variables BehaviorSubjects
  cartList: BehaviorSubject<product[]>= new BehaviorSubject (this._cartlist);
  totalPrice: BehaviorSubject<number> = new BehaviorSubject(this._totalPrice);

  //Creo observables de los BehaviorSubjects
  obsPrice : Observable <number> = this.totalPrice.asObservable();

  public updateTotal():void{
    this._totalPrice = 0;
    for(let i = 0; i<this._cartlist.length; i++){
     this._totalPrice += this._cartlist[i].price * this._cartlist[i].quantity;
   }

   this.totalPrice.next(this._totalPrice);
   }
 
  
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
    this.updateTotal();
 }


}