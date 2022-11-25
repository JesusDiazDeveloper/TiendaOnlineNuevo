import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ConnectableObservable } from 'rxjs';
import { product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {
  @Input()
  "quantity": number;
  @Input()
  "max": number;
  @Output()
  quantityChange: EventEmitter<number>= new EventEmitter<number>();


  


  upQuantity(): void {
    if (this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }
  downQuantity(): void {
    if (this.quantity > 0){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  //No permite que la cantidad sea mayor a 
  verifyQuantity(e: any): void {
    console.log(e);
    if (this.quantity > this.max) {
      // alert('Solicitud exede el stock disponible');
      this.quantity = this.max;
      this.quantityChange.emit(this.quantity);
    }
    else if (this.quantity < 0) {
      // alert('Ingrese un numero mayor a 0');
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
    }
  }
  // Funcion que no me deja escribir otra cosa que no sea numero.
  onlyNumbersInInput(e: any): void {
    if (!((e.key) <= 9 && (e.key) >= 0) || (e.key == " ")) {
      e.preventDefault();
    }
  }
}
