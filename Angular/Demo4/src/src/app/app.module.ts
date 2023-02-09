import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 

import { AppComponent } from './app.component';
import { ProductComponent } from './Components/product/product.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
