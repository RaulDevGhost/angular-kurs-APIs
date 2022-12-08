import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private shopingCart: Product[] = [];
  private myCart = new BehaviorSubject<Product[]>([]);

  myCart$ = this.myCart.asObservable();

  constructor() {}

  addProduct(product: Product) {
    this.shopingCart.push(product);
    this.myCart.next(this.shopingCart);
  }

  getShoppingCart() {
    return this.shopingCart;
  }

  getTotal() {
    return this.shopingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
