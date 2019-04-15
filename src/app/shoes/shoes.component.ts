import { Component, OnInit } from '@angular/core';
import { Shoe } from '../models/shoe.model';
import { ShoesService } from '../shoes.service';
import { FilterBrandNikePipe } from '../filterbrand.pipe';
import { Cart } from '../models/cart.model';
import { FilterBrandGucciPipe } from '../filtergucci.pipe';
import { FilterBrandAdidasPipe}  from '../filteradidas.pipe.ts.pipe';
import { FilterBrandVansPipe } from '../filtervans.pipe';
@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css'],
  providers: [ShoesService]
})
export class ShoesComponent implements OnInit {
    shoes:Shoe[];
  constructor( private shoeService: ShoesService){}
ngOnInit(){
  this.shoes = this.shoeService.getShoe();
}
  nikeHeader: string = "Nikes"
  gucciHeader: string = "Gucci"
  adidasHeader: string = "Adidas"
  vansHeader: string = "Vans"

}
