import { Component } from '@angular/core';
import { Shoe } from '../models/shoe.model';
@Component({
  selector: 'app-gucci-shoes',
  templateUrl: './gucci-shoes.component.html',
  styleUrls: ['./gucci-shoes.component.css']
})
export class GucciShoesComponent {
  header: string = "Gucci"
  gucci: Shoe[] = [
    new Shoe("Gucci Slides",200),
    new Shoe("GG Velvets",850),
    new Shoe("Flash Tek Hightops", 1300),
    new Shoe("Righten Sneakers" ,900),
  ];

}
