import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AuthGuard } from './auth.guard';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

import { DatasharingService } from "./datasharing.service";
import { AddupdatecartbtnComponent } from './addupdatecartbtn/addupdatecartbtn.component';
import { ProductComponent } from './product/product.component';
import { ProductUriPipe } from './product-uri.pipe';
import { CartComponent } from './cart/cart.component';
import { NetPayPipe } from './net-pay.pipe';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderFailComponent } from './order-fail/order-fail.component';
import { BtnpaginationComponent } from './btnpagination/btnpagination.component';
import { ContactComponent } from './contact/contact.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { MyordersComponent } from './myorders/myorders.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    RegistrationComponent,
    LoginComponent,
    MyaccountComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    AddupdatecartbtnComponent,
    ProductComponent,
    ProductUriPipe,
    CartComponent,
    NetPayPipe,
    OrderSuccessComponent,
    OrderFailComponent,
    BtnpaginationComponent,
    ContactComponent,
    FileuploadComponent,
    MyordersComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [DatasharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
