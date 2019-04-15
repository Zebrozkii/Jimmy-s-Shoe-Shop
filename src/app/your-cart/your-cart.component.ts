import { Component} from '@angular/core';
import { Shoe } from '../models/shoe.model';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent {
  constructor(private database: AngularFireDatabase){
    this.cart=database.list("currentCart");
  }
cart: FirebaseListObservable<any[]>;
 title: string  = "Your Cart";
  ngOnInit(){
  return this.cart;
  }
}
