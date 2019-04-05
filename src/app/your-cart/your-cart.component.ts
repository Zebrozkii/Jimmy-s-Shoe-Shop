import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Shoe } from '../models/shoe.model';
@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent {
  @Input() childShoeList: Shoe[];
  @Output() clickSender = new EventEmitter();

  addToCart(currentShoe: Shoe){
    this.clickSender.emit(currentShoe);
  }
}
