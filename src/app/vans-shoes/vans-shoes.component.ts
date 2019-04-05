import { Component } from '@angular/core';
import { Shoe } from '../models/shoe.model';
@Component({
  selector: 'app-vans-shoes',
  templateUrl: './vans-shoes.component.html',
  styleUrls: ['./vans-shoes.component.css']
})
export class VansShoesComponent{
  header: string = "Vans"
  vans: Shoe[] = [
    new Shoe("Checkers",50),
    new Shoe("Classics",40),
    new Shoe("Half Cabs", 200),
    new Shoe("HighTops" ,70),
  ];
}
