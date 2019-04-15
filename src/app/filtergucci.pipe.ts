import {Pipe, PipeTransform} from '@angular/core';
import {Shoe} from './models/shoe.model';
import {ShoesService} from './shoes.service';

@Pipe({
  name: "gucci"
})

export class FilterBrandGucciPipe implements PipeTransform {
  constructor(public testService: ShoesService){}
  transform(input: Shoe[]) {
    var output:Shoe[] = [];
    for(var i = 0; i<input.length;i++){
      if(input[i].brand === "Gucci"){
        output.push(input[i]);
      }
    }
    return output;
  }
}
