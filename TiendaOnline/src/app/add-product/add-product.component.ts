import { Component, Input } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import { product } from '../product-list/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {

  products : product [] = [];
  product: any;
 
 constructor( 
  private productsDataService:ProductDataService
  ){
 }


 getAll():void{
   this.productsDataService.getAll()
   .subscribe(products => this.products = products);
  }
 remove(p:product):void{
  this.productsDataService.remove(p).subscribe(p =>{
    console.log("se elmino : "+p.id)
    this.getAll()
  } 
  )
 }

 ngOnInit():void{
  this.getAll();
 }

 p : product= {
   "name" : '',
   "price" : 0,
   "image" : '',
   "stock" : 0,
   "clearance" : false,
   "quantity" : 0,

 } 
 error:boolean = false;


 add(){
   if(this.verifyProduct()){
     this.productsDataService.POST(this.p).subscribe(product =>{
    this.getAll(); 
    });

     this.p.name='';
     this.p.price=0;
     this.p.image='';
     this.p.clearance=false;
     this.p.stock = 0;
   }
   else{
     this.error = true;
   }
 }

 verifyProduct() : boolean{
   if(this.p.name!=''&&this.p.price!=0&&this.p.price!=0&&this.p.image!=''&&this.p.stock!=0){
     return true
   }
   else {
     return false;
   }
 }

 


}

