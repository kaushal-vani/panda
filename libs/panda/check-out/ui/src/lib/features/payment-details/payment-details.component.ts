import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';

@Component({
  selector: 'lib-payment-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, InputMaskModule, ButtonModule],
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent {
  @Input() paymentForm!: FormGroup;

  @Output() previous = new EventEmitter<void>();
  @Output() finalizeCheckout = new EventEmitter<void>();

  onPrevious(): void {
    this.previous.emit(); // Emit the previous event
  }

  onComplete(): void {
    if (this.paymentForm.valid) {
      this.finalizeCheckout.emit(); // Emit the complete event
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const control = this.paymentForm.get(fieldName);
    return control ? control.invalid && control.touched : false; // Explicitly handle undefined case
  }
}