import { Component, EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input({ required: true }) img: string = '';
  @Input({ required: true }) price: number = 0;
  @Input({ required: true }) title: string = '';
  // img = "https://picsum.photos/640/640?r=" + Math.random();

  @Output() onAddToCart = new EventEmitter();

  addToCartHandler() {
    console.log('click from child component');
    this.onAddToCart.emit('Msg from child component ' + this.title);
  }
}
