import { Injectable } from '@angular/core';
import { Shoe } from './models/shoe.model';
import { SHOES } from './mock-shoes';

@Injectable()
export class ShoesService {

  constructor() { }
  
  getShoe(){
    return SHOES;
  }

}
