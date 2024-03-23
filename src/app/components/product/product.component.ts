import { Component } from '@angular/core';
import { Product } from '../../models/product';

import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  products: Product[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}
  //observable->asenkron döndürür bizdes subscribe olup senkron oluyoruz.

  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params) => {
      if (params['categoryID']) {
        this.getProductsByCatgeory(params['categoryID']);
      } else {
        this.getProducts();
      }
    });
  }
  getProducts() {
    this.productService.getProducts().subscribe((response) => {
      this.products = response.data;
      this.dataLoaded = true;
      //senkron hale getiri burayı method dışına yapsak işe yaramaz
    });
  }

  getProductsByCatgeory(categoryid: number) {
    this.productService
      .getProductsbycategory(categoryid)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
        console.log('girdi');
        //senkron hale getiri burayı method dışına yapsak işe yaramaz
      });
  }

  addToCart(product: Product) {
    this.toastrService.success('sepete eklendi', product.name);
    this.cartService.addToCart(product);
  }
}
