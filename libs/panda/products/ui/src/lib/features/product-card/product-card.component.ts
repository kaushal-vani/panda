import { Component, Input } from '@angular/core';
import { Product } from './models/product-card.interfaces';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-product-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, CardModule, ButtonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input()
  product!: Product;

  increment() {
    if (this.product.quantity < this.product.stock) {
      this.product.quantity++;
    }
  }

  decrement() {
    if (this.product.quantity > 0) {
      this.product.quantity--;
    }
  }
}
