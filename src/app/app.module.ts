import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NikeShoesComponent } from './nike-shoes/nike-shoes.component';


@NgModule({
  declarations: [
    AppComponent,
    NikeShoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
