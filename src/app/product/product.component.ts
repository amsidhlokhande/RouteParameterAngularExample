import {Component, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {ProductIntf} from '../product-intf';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product',
  template: `
          <h3>Product List</h3>
          <ul class="items">
              <li (click)="getProductId(product.id)" [class.selected]="isSelected(product)" *ngFor="let product of products">
                  <span class="badge">{{product.id }}</span> {{product.name}}
              </li>
          </ul>
  `,
  styles: []
})
export class ProductComponent implements OnInit {
  public products: ProductIntf[];
  public selectedId;
  constructor(private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.products = this.productService.getProducts();
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let id = parseInt(paramMap.get('id'));
      this.selectedId = id;
    });
  }

  ngOnInit() {
  }

  getProductId(id: number) {
    this.router.navigate(['/productDetails', id]);
  }

  isSelected(product: ProductIntf) {
    return product.id === this.selectedId;
  }
}
