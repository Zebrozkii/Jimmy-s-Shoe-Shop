import { Component } from '@angular/core';
import { Shoe } from '../models/shoe.model';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent{
  shoe = [];
  nikeHeader: string = "Nikes"
  nike: Shoe[] = [
    new Shoe("Jordan",200,1),
    new Shoe("AirMax",120,2),
    new Shoe("Nike Reacts", 160,3),
    new Shoe("Nike Sb" ,110,4),
  ];
  gucciHeader: string = "Gucci"
  gucci: Shoe[] = [
    new Shoe("Gucci Slides",200,5),
    new Shoe("GG Velvets",850,6),
    new Shoe("Flash Tek Hightops", 1300,7),
    new Shoe("Righten Sneakers" ,900,8),
  ];
  adidasHeader: string = "Adidas"
  adidas: Shoe[] = [
    new Shoe("Pods",60,9),
    new Shoe("Ultra Boosts",200,10),
    new Shoe("Human Races", 200,11),
    new Shoe("Samabas" ,70,12),
  ];
  vansHeader: string = "Vans"
  vans: Shoe[] = [
    new Shoe("Checkers",50,13),
    new Shoe("Classics",40,14),
    new Shoe("Half Cabs", 200,15),
    new Shoe("HighTops" ,70,16),
  ];



}
