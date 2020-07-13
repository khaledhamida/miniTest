import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiUrl = "http://localhost:3000/products";
  constructor(private http: HttpClient) { }
  // get all products
  findAll() {
    return this.http.get<Product[]>(this.apiUrl);
  }
  // delete product
  delete(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // get product by id
  getProductById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  // edit product
  editProduct(product: Product): Observable<Product> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }
  // add product
  add(product: Product) {
 
    return this.http.post<Product>(this.apiUrl, product);
  }
}
