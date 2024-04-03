import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrl: './product-delete.component.css',
})
export class ProductDeleteComponent {
  @Input() selectedProduct: Product;

  constructor(
    private productService: ProductService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  closeConfirmationModal() {
    this.selectedProduct = null;
  }

  deleteProduct() {
    if (this.selectedProduct) {
      this.productService.deleteProduct(this.selectedProduct).subscribe(
        (response) => {
          this.toastrService.success('Ürün başarıyla silindi', 'Başarılı', {
            progressBar: true,
          });
          setTimeout(function () {
            window.location.reload();
          }, 1000);
          this.closeConfirmationModal();
        },
        (error) => {
          this.toastrService.error('Ürün silinirken bir hata oluştu', 'Hata', {
            progressBar: true,
          });
          this.closeConfirmationModal();
        }
      );
    }
  }
}
