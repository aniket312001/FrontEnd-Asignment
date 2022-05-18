import { MaterialModule } from './material/material.module';
import { MaterialUIModule } from './../../../sellingApp/src/app/material-ui/material-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './component/header/header.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { MainPageComponent } from './component/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingCartComponent,
    ProductCardComponent,
    CheckoutComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
