import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  Product,
  CreateProductDTO,
  UpdateProductDTO,
} from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private apiURL = 'https://young-sands-07814.herokuapp.com/api/products';

  getAllProducts(limit?: number, offset?: number): Observable<Product[]> {
    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }
    return this.http.get<Product[]>(`${this.apiURL}`, { params });
  }

  // getProductsByPage(limit: number, offset: number): Observable<Product[]> {
  //   return this.http.get<Product[]>(`${this.apiURL}`, {
  //     params: { offset, limit },
  //   });
  // }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }

  createProduct(product: CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(this.apiURL, product);
  }

  updateProduct(id: number, product: UpdateProductDTO): Observable<Product> {
    return this.http.put<Product>(`${this.apiURL}/${id}`, product);
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiURL}/${id}`);
  }
}
