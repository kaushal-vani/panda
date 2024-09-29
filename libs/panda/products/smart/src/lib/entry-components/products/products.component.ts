import { Component } from '@angular/core';
import { ProductsPageComponent } from '@panda/panda/products/ui';

@Component({
  selector: 'lib-products',
  standalone: true,
  imports: [ProductsPageComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
