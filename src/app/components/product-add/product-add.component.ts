import { Component } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  productAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService
  ) {}

  ngOnInit() {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      name: ['', Validators.required],
      userId: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      unitsInStock: ['', Validators.required],
      unitPrice: ['', Validators.required],
      categoryID: ['', Validators.required],
    });
  }

  add() {
    if (this.productAddForm.valid) {
      console.log('1');
      let productModel = Object.assign({}, this.productAddForm.value);
      console.log(productModel);

      this.productService.add(productModel).subscribe((response) => {
        console.log(response);
        this.toastrService.success('Ürün eklendi', 'Başarılı');
      });
    } else {
      this.toastrService.error('Formunuz eksik veya hatalı', 'Dikkat');
    }
  }
}
