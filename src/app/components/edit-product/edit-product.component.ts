import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: string;
  product: Product;
  productName: string;
  productPriceUnity: number;
  productQuantity: number;
  constructor(private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private router: Router) { }

  ngOnInit(): void {
    // get product by id
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe(
      data => {
        console.log('This is my product', data);
        this.product = data;


      }
    )
  }
  // function allows to solve error
  // debugg() {
  //   this.productService.getProductById(this.id)
  //     .subscribe(
  //       (data) => {
  //         this.productName = this.product.name;
  //         this.productPriceUnity = this.product.priceUnity;
  //         this.productQuantity = this.product.quantity;
  //       },
  //       err => {
  //         console.log('get product failed');
  //       }
  //     );
  // }
  // function allows to edit product
  edit(p: any) {
    this.productService.editProduct(this.product).subscribe(
      () => {
        console.log(this.product.name);
        this.router.navigate(['/']);
      }
    )
  }

}
