import { Component } from '@angular/core';
import { Shoe } from '../models/shoe.model';
@Component({
  selector: 'app-adidas-shoes',
  templateUrl: './adidas-shoes.component.html',
  styleUrls: ['./adidas-shoes.component.css']
})
export class AdidasShoesComponent {
    header: string = "Adidas"
    adidas: Shoe[] = [
      new Shoe("Pods",60),
      new Shoe("Ultra Boosts",200),
      new Shoe("Human Races", 200),
      new Shoe("Samabas" ,70),
    ];
  }
