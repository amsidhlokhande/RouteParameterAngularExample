import {Injectable} from '@angular/core';
import {ProductIntf} from './product-intf';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductIntf[] = [
    {
      id: 1,
      name: 'Apple',
      price: 125.5,
      quantity: 5
    },
    {
      id: 2,
      name: 'Banana',
      price: 80.5,
      quantity: 10
    },
    {
      id: 3,
      name: 'Lemon',
      price: 23,
      quantity: 20
    },
    {
      id: 4,
      name: 'Mango',
      price: 450.75,
      quantity: 2
    },
  ];

  constructor() {
  }

  public getProducts(): ProductIntf[] {
    return this.products;
  }

  public getProductById(id: number): ProductIntf {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        return this.products[i];
      }
    }
    return null;
  }
}
