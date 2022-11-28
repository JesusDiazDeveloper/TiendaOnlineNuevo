import { Component } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { product } from '../product-list/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  products : product [] = [];


 constructor( 
  // private cart: ProductCartService,
  private productsDataService:ProductDataService
  ){
 }

 ngOnInit():void{
  this.productsDataService.getAll()
  .subscribe(products => this.products = products);
 }

 

}

