import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { product } from './product-list/product';

const URL = 'https://6382af381ada9475c8f17305.mockapi.io/api/products'

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor( private http: HttpClient ) { }

  
  public getAll():Observable<product[]> {
    return this.http.get<product[]>(URL)
    .pipe(
      tap((products:product[])=>products.forEach(product=>product.quantity=0))
    )
    ;
  }

  public POST(p:product) : Observable<product> {
    return this.http.post<product>(URL,p);
  }

  public remove (p : product) :Observable<product>{
    return this.http.delete<product>(URL+"/"+ p.id)
  }
}
