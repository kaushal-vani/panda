import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-contact-details',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, ButtonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.scss'
})
export class ContactDetailsComponent  {
  @Input() contactForm!: FormGroup;
  @Output() next: EventEmitter<void> = new EventEmitter<void>();

  onSubmit() {
    if (this.contactForm.valid) {
      this.next.emit()
    }
  }
}