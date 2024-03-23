import { Component } from '@angular/core';
import { CartItem } from '../../models/cardItem';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent {
  cardItems: CartItem[];

  constructor(
    private cartService: CartService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getlistcard();
  }

  getlistcard() {
    this.cardItems = this.cartService.list();
  }

  removeFromCart(product: Product) {
    this.cartService.removeFromCart(product);
    this.toastrService.error(product.name, 'Silindi');
  }
}
