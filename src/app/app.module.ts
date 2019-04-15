import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { YourCartComponent } from './your-cart/your-cart.component';
import { ShoesComponent } from './shoes/shoes.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { masterFirebaseConfig } from './api-key';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FilterBrandNikePipe } from './filterbrand.pipe';
import { FilterBrandGucciPipe } from './filtergucci.pipe';
import { FilterBrandAdidasPipe}  from './filteradidas.pipe.ts.pipe';
import { FilterBrandVansPipe } from './filtervans.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    YourCartComponent,
    ShoesComponent,
    HomeComponent,
    FilterBrandNikePipe,
    FilterBrandGucciPipe,
    FilterBrandAdidasPipe,
    FilterBrandVansPipe
  ],
  imports: [
    BrowserModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
