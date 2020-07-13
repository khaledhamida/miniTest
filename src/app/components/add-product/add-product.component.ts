import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  prU: number;
  qtity:number;
  product: Product;
  produitForm: FormGroup;
  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
  
    this.product = new Product('', '', 0, 0);
    this.produitForm = this.fb.group({
      name: [''],
      priceUnity: [''],
      quantity: [''],
    })
  }
  // add product
  addProduct(p: any) {
    console.log("this is my form", this.product);
    this.productService.add(this.product).subscribe(
      () => {
        console.log("Product added successfully");
        console.log("new product", this.product);
        this.router.navigate(['/']);
      }
    )
  }

}
