import { Component } from '@angular/core';
import { PaymentPageComponent } from '@panda/panda/payment/ui';

@Component({
  selector: 'lib-payment',
  standalone: true,
  imports: [PaymentPageComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
