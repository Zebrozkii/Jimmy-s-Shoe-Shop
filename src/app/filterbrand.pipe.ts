import {Pipe, PipeTransform} from '@angular/core';
import {Shoe} from './models/shoe.model';
import {ShoesService} from './shoes.service';

@Pipe({
  name: "nike"
})

export class FilterBrandNikePipe implements PipeTransform {
  constructor(public testService: ShoesService){}
  transform(input: Shoe[]) {
    var output:Shoe[] = [];
    for(var i = 0; i<input.length;i++){
      if(input[i].brand === "Nike"){
        output.push(input[i]);
      }
    }
    return output;
  }
}
