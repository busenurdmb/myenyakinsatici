import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { __param } from 'tslib';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css',
})
export class ProductUpdateComponent implements OnInit {
  productUpdateForm: FormGroup;
  products: Product;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getProductDetails(params['productId']);
    });
    this.createProductUpdateForm();
  }

  createProductUpdateForm() {
    this.productUpdateForm = this.formBuilder.group({
      productId: ['', Validators.required],
      name: ['', Validators.required],
      userId: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      unitPrice: ['', Validators.required],
      categoryID: ['', Validators.required],
    });
  }

  update() {
    if (this.productUpdateForm.valid) {
      let productModel = Object.assign({}, this.productUpdateForm.value);
      this.productService.update(productModel).subscribe((response) => {
        this.toastrService.success(response.message, 'Başarılı', {
          progressBar: true,
        });
        this.router.navigate(['/products/list']);
      });
    } else {
      this.toastrService.error('Formunuz eksik', 'Hata', {
        progressBar: true,
      });
    }
  }

  getProductDetails(productId: number) {
    this.productService.getProductsDetails(productId).subscribe((response) => {
      console.log(response.data);
      this.products = response.data;
      this.productUpdateForm.patchValue(this.products);
    });
  }
}
