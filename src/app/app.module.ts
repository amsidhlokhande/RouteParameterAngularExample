import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routingComponent} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductService} from './product.service';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductLocationComponent } from './product-location/product-location.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    ProductOverviewComponent,
    ProductLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
