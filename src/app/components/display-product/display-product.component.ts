import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class displayProductComponent implements OnInit {
  id: string;
  product: Product;
  constructor(private activateRoute: ActivatedRoute,
    private productsService: ProductService) { }

  ngOnInit(): void {
    // display product by id
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.productsService.getProductById(this.id).subscribe(
      data => {
        console.log("Data", data);
        this.product = data;
      }
    )
  }

}
