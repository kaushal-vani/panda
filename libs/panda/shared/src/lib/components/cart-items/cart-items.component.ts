import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-cart-items',
  standalone: true,
  imports: [DialogModule, ButtonModule, CommonModule],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss',
})
export class CartItemsComponent {
  displayModal = false;

  showModal() {
    this.displayModal = true;
  }
}