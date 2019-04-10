import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { ShoesComponent } from './shoes/shoes.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    YourCartComponent,
    ShoesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
