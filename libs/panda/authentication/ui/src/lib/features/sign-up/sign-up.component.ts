import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

// PrimeNG Modules
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ScreenAction, SCREEN_VIEW, BUTTON_NAME } from '@panda/panda/shared';

@Component({
  selector: 'lib-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  @Output() navigate = new EventEmitter<ScreenAction>();
  @Output() verify = new EventEmitter<ScreenAction>();
  signUpForm!: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.signUpForm = this.fb.group(
      {
        username: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },
      { validator: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('password')?.value === form.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onSubmit() {
    this.loading = true;
    setTimeout(() => {
      if (this.signUpForm.valid) {
        this.verify.emit({
          currentView: SCREEN_VIEW.SIGN_UP,
          buttonName: BUTTON_NAME.SUBMIT,
        });
      }
      this.loading = false;
    }, 2000);
  }

  navigateToLogin() {
    this.navigate.emit({
      currentView: SCREEN_VIEW.SIGN_UP,
      buttonName: BUTTON_NAME.GO_TO_LOGIN,
      nextView: SCREEN_VIEW.LOGIN,
    });
  }
}
