import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product: Product;
  @Output() newProducts: EventEmitter<Product[]> = new EventEmitter();
  products: Product[];
  constructor(
    private ProductService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }
  // get all products
  getProducts() {
    this.ProductService.findAll().subscribe(products => this.products = products)
  }
  // delete product
  deleteProduct(id) {
    this.ProductService.delete(id).subscribe(() => {
      this.products = this.products.filter(product => product.id != id);
      this.ProductService.findAll().subscribe(
        data => {
          console.log("this is my Data", data);
          this.newProducts.emit(this.products);
        }
      )
    })
  }
  // display product
  displayProduct(id: string) {
    console.log(id);
    this.router.navigate([`/displayProduct/${id}`]);
  }
  // edit product
  EditProduct(id: string) {
    console.log(id);
    this.router.navigate([`/editProduct/${id}`]);
  }
  // add product
  addProduct() {
    this.router.navigate([`/addProduct`]);
  }

}
