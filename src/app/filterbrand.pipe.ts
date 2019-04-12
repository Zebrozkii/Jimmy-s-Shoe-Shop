import {Pipe, PipeTransform} from '@angular/core';
import {Shoe} from './models/shoe.model';

@Pipe({
  name: "nike",
  pure:false

})

export class FilterBrandNikePipe implements PipeTransform {
  transform(input: Shoe[]) {
    var output:Shoe[] = [];
    for(var i = 0; i<input.length;i++){
      if(input[i].brand==="nike"){
        output.push(input[i]);
      }
    }

    return input;
  }
}
