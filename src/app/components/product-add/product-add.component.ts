import { Component } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css',
})
export class ProductAddComponent {
  productAddForm: FormGroup;
  user: User;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getUserInfo();
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

      this.productService.add(productModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Başarılı');
          this.router.navigate(['/products/list']);
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Doğrulama Hatası'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Formunuz eksik veya hatalı', 'Dikkat');
    }
  }
  getUserInfo() {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      const userEmail = this.userService.getUserEmailFromToken(token);
      if (userEmail) {
        console.log(userEmail);
        this.userService.getByMail(userEmail).subscribe(
          (user: User) => {
            this.user = user;
            // Kullanıcı bilgisi alındıktan sonra, userId alanını doldur
            this.productAddForm.get('userId').setValue(user.userId);
            console.log(user);
          },
          (error) => {
            this.toastrService.error('Kullanıcı bilgileri alınamadı.');
          }
        );
      } else {
        this.toastrService.error('Kullanıcı email bilgisi bulunamadı.');
      }
    }
  }
}
