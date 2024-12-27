import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { MainComponent } from './components/pages/main/main.component';
import { CatalogComponent } from './components/pages/catalog/catalog.component';
import { OrderComponent } from './components/pages/order/order.component';
import { ProductComponent } from './components/pages/product/product.component';
import {ProductService} from "./services/product.service";
import { ShortDescrPipe } from './pipes/short-descr.pipe';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogComponent,
    OrderComponent,
    ProductComponent,
    ShortDescrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
