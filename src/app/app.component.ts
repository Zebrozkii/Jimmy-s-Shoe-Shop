import { Component } from '@angular/core';
import { Shoe } from './models/shoe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Jimmy's Shoe Shop";
  description: string = "Here at Jimmy's we have the some of the finest shoes and in fashion sneakers on the market"
  currentTime = new Date();
  month: number = this.currentTime.getMonth()+1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
}
addToCart(clickedShoe){
this.selectedShoe = clickedShoe;
}
