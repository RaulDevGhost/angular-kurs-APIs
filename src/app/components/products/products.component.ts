import { Component, OnInit } from '@angular/core';
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from '../../models/product.model';
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  total = 0;
  productsFetchAll: Product[] = [];
  shopingCart: Product[] = [];
  products: Product[] = [];
  productDetail: Product = {
    id: 0,
    images: [''],
    price: 0,
    category: {
      id: 0,
      name: '',
      typeImg: '',
    },
    rating: {
      count: 0,
      rate: 0,
    },
    title: '',
    description: '',
  };
  limit = 10;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.shopingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  addingCart(product: Product) {
    if (!this.shopingCart.includes(product)) {
      this.storeService.addProduct(product);
      this.total = this.storeService.getTotal();
      //this.shopingCart.push(product);
      //this.total += product.price;
      //this.total = this.shopingCart.reduce((sum, item) => sum + item.price, 0);
    }
  }

  getProduct(id: number) {
    this.productsService.getProduct(id).subscribe((res) => {
      this.productDetail = res;
    });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      title: 'nuevo titulo',
      price: 180,
      description:
        'New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart',
      images: [
        'https://placeimg.com/640/480/arch?r=0.21673949981208263',
        'https://placeimg.com/640/480/arch?r=0.7067260949802254',
        'https://placeimg.com/640/480/arch?r=0.22428759698702305',
      ],
      categoryId: 1,
    };

    this.productsService.createProduct(product).subscribe((res) => {
      this.products.unshift(res);
    });
  }

  updateProduct(data: { id: number; changes: UpdateProductDTO }) {
    const { id, changes } = data;
    this.productsService.updateProduct(id, changes).subscribe((res) => {
      const productIndex = this.products.findIndex(
        (item) => item.id === res.id
      );
      this.products[productIndex] = res;
      this.productDetail = res;
    });
  }

  deleteProduct(id: number) {
    this.productsService.deleteProduct(id).subscribe((res) => {
      console.log('res delete--->', res);
      const productIndex = this.products.findIndex((item) => item.id === id);
      this.products.splice(productIndex, 1);
      console.log(this.products);
    });
  }

  loadMore() {
    this.productsService
      .getAllProducts(this.limit, this.offset)
      .subscribe((res) => {
        this.products = res;
        this.offset += this.limit;
        console.log(this.offset);
        console.log(this.products);
      });
  }
}
