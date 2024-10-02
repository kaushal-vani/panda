import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-shipping-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ButtonModule],
  templateUrl: './shipping-details.component.html',
  styleUrl: './shipping-details.component.scss',
})
export class ShippingDetailsComponent {
  @Input() shippingForm!: FormGroup;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();
  @Output() previous: EventEmitter<void> = new EventEmitter<void>();

  onNext() {
    if (this.shippingForm.valid) {
      this.next.emit()
    }
  }

  onPrevious() {
    this.previous.emit()
  }
}
