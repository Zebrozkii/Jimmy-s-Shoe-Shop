import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NikeShoesComponent } from './nike-shoes/nike-shoes.component';
import { AdidasShoesComponent } from './adidas-shoes/adidas-shoes.component';
import { VansShoesComponent } from './vans-shoes/vans-shoes.component';
import { GucciShoesComponent } from './gucci-shoes/gucci-shoes.component';


@NgModule({
  declarations: [
    AppComponent,
    NikeShoesComponent,
    AdidasShoesComponent,
    VansShoesComponent,
    GucciShoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
