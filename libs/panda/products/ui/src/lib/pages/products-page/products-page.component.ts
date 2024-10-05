import { Component } from '@angular/core';
import { ProductCardComponent } from '../../features/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { MOCK_PRODUCTS } from '../../features/product-card/mocks/product-card.mocks';
import { Product } from '../../features/product-card/models/product-card.interfaces';

@Component({
  selector: 'lib-products-page',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {
  products: Product[] = MOCK_PRODUCTS;
}
