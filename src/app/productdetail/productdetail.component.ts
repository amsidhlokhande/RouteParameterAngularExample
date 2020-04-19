import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductIntf} from '../product-intf';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-productdetail',
  template: `
      <div style="text-align: center">
          <h3> Product Id- {{product.id}}</h3>
          <h3> Product Name- {{product.name}}</h3>
          <h3>Product Price/Item- {{product.price}}</h3>
          <h3>Quantity- {{product.quantity}}</h3>
          <h3> Total Price- {{product.price * product.quantity}}</h3>
      </div>
      <p>
          <button (click)="productOverview()">Overview</button>
          <button (click)="productLocation()">Location</button>
      </p>
      <div>
          <button (click)="perviousProduct()">Previous</button>
          |
          <button (click)="nextProduct()">Next</button>
          <button (click)="goBack()">Go Back</button>
      </div>
      <router-outlet></router-outlet>
  `,
  styles: []
})
export class ProductdetailComponent implements OnInit {
  public product: ProductIntf;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = parseInt(paramMap.get('id'));
      console.log('let id =' + id);
      this.product = this.productService.getProductById(id);
    });

  }

  public perviousProduct() {
    console.log('perviousProduct =' + (this.product.id - 1));
    this.router.navigate(['/productDetails', this.product.id - 1]);
  }

  public nextProduct() {
    console.log('nextProduct =' + (this.product.id + 1));
    this.router.navigate(['/productDetails', this.product.id + 1]);
  }

  goBack() {
    let selectedId = this.product.id ? this.product.id : null;
    this.router.navigate(['/product', {id: selectedId}]);
  }

  productOverview() {
    this.router.navigate(['/productDetails/' + this.product.id + '/productOverview'], {relativeTo: this.activatedRoute});
  }

  productLocation() {
    this.router.navigate(['/productDetails/' + this.product.id + '/productLocation'], {relativeTo: this.activatedRoute});
  }
}
