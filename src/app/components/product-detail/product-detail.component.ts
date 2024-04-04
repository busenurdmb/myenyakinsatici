import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  products: Product;
  categories: Category;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private cartService: CartService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductDetails(params['productId']);
      this.getcategorybyproduct(params['productId']);
    });
  }

  getProductDetails(productId: number) {
    this.productService.getProductsDetails(productId).subscribe((response) => {
      console.log(response.data);
      this.products = response.data;
    });
  }
  getcategorybyproduct(productId: number) {
    this.categoryService
      .getcategorybyproductıd(productId)
      .subscribe((response) => {
        console.log(response.data);
        this.categories = response.data;
      });
  }
  addToCart(product: Product) {
    this.toastrService.success('sepete eklendi', product.name);
    this.cartService.addToCart(product);
  }
}
