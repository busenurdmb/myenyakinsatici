import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products: Product[] = [];
  dataLoaded = false;
  filterText = '';
  selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private activetedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.activetedRoute.params.subscribe((params) => {
      if (params['categoryID']) {
        this.getProductsByCategory(params['categoryID']);
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

  getProductsByCategory(categoryid: number) {
    this.productService
      .getProductsbycategory(categoryid)
      .subscribe((response) => {
        this.products = response.data;
        this.dataLoaded = true;
        console.log('girdi');
        //senkron hale getiri burayı method dışına yapsak işe yaramaz
      });
  }
  openConfirmationModal(product: Product) {
    this.selectedProduct = product;
  }
}
