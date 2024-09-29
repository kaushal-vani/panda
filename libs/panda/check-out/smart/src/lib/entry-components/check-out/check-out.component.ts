import { Component } from '@angular/core';
import { CheckOutPageComponent } from '@panda/panda/check-out/ui';

@Component({
  selector: 'lib-check-out',
  standalone: true,
  imports: [CheckOutPageComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

}
