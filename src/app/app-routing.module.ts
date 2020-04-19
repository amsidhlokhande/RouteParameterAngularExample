import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductdetailComponent} from './productdetail/productdetail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductOverviewComponent} from './product-overview/product-overview.component';
import {ProductLocationComponent} from './product-location/product-location.component';

const routes: Routes = [
  {path: 'product', component: ProductComponent},
  {
    path: 'productDetails/:id',
    component: ProductdetailComponent,
    children: [
      {path: 'productOverview', component: ProductOverviewComponent},
      {path: 'productLocation', component: ProductLocationComponent},
      {path: '', component: ProductOverviewComponent},
      {path: '**', component: PageNotFoundComponent}
    ]
  },
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponent = [ProductComponent, ProductdetailComponent, PageNotFoundComponent, ProductOverviewComponent, ProductLocationComponent];
