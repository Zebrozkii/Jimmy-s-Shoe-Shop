import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YourCartComponent} from './your-cart/your-cart.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
  {
  path:'',
  component: HomeComponent
},
{
  path:'cart',
  component: YourCartComponent
}
];

 export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
