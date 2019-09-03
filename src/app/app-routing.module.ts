import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router, ActivatedRoute, ParamMap } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderFailComponent } from './order-fail/order-fail.component';
import { ContactComponent } from './contact/contact.component';
import { MyordersComponent } from './myorders/myorders.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'myaccount',
    component: MyaccountComponent
  },
  {
    path: 'search/:q',
    component: SearchComponent
  },
  {
    path: 'product/:name/:id',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'order-success/:q',
    component: OrderSuccessComponent
  },
  {
    path: 'order-fail',
    component: OrderFailComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'myorders',
    component: MyordersComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
