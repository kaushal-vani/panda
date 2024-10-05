import { Component } from '@angular/core';
import { PickListModule } from 'primeng/picklist';

@Component({
  selector: 'lib-wish-list',
  standalone: true,
  imports: [PickListModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.scss'
})
export class WishListComponent {

}
