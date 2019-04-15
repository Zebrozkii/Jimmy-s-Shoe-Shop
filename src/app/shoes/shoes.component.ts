import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe.model';
import { ShoesService } from '../shoes.service';
import { FilterBrandNikePipe } from '../filterbrand.pipe';
import { Cart } from '../models/cart.model';
import { FilterBrandGucciPipe } from '../filtergucci.pipe';
import { FilterBrandAdidasPipe}  from '../filteradidas.pipe.ts.pipe';
import { FilterBrandVansPipe } from '../filtervans.pipe';
import { masterFirebaseConfig } from '../api-key';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
  providers: [ShoesService]
})
export class ShoesComponent implements OnInit {
  cart: FirebaseListObservable<any[]>;
    shoes:Shoe[];
  constructor( private shoeService: ShoesService, private database:AngularFireDatabase){
    this.cart=database.list("currentCart");
  }
ngOnInit(){
  this.shoes = this.shoeService.getShoe();
}
  nikeHeader: string = "Nikes"
  gucciHeader: string = "Gucci"
  adidasHeader: string = "Adidas"
  vansHeader: string = "Vans"

  addToCart(name,price,brand,id){
  var ref = firebase.database().ref('currentCart');
  var newShoe = new Shoe(name,price,id,brand);
  ref.push(newShoe);
  }
}
