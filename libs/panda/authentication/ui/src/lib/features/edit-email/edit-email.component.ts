import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@panda/panda/shared';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-edit-email',
  templateUrl: './edit-email.component.html',
  styleUrls: ['./edit-email.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
  ],
})
export class EditEmailComponent {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() back = new EventEmitter<ScreenAction>();

  emailForm: FormGroup;
  successMessage!: string;

  constructor(private fb: FormBuilder) {
    this.emailForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
    });
  }

  get email() {
    return this.emailForm.get('emailAddress');
  }

  saveEmailAddress() {
    if (this.emailForm.valid) {
      this.successMessage = 'Email address saved successfully.';
      setTimeout(() => {
        this.navigate.emit({
          currentView: SCREEN_VIEW.EDIT_EMAIL,
          buttonName: BUTTON_NAME.SAVE,
          nextView: SCREEN_VIEW.ONE_TIME_PASSWORD,
        });
      }, 2000);
    }
  }

  cancelEdit() {
    this.emailForm.reset();
    this.back.emit({
      currentView: SCREEN_VIEW.EDIT_EMAIL,
      buttonName: BUTTON_NAME.CANCEL,
      previousView: SCREEN_VIEW.SELECT_DEVICE,
    });
  }
}
