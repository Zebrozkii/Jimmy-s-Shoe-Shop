import { Component} from '@angular/core';
import { Shoe } from '../models/shoe.model';
@Component({
  selector: 'app-nike-shoes',
  templateUrl: './nike-shoes.component.html',
  styleUrls: ['./nike-shoes.component.css']
})
export class NikeShoesComponent {
  nike: Shoe[] = [
    new Shoe("Jordan",200),
    new Shoe("AirMax",120),
    new Shoe("Nike Reacts", 160),
    new Shoe("Nike Sb" ,110),
  ];

}
