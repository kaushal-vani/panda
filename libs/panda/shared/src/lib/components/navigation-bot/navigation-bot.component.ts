import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-navigation-bot',
  standalone: true,
  imports: [
    ButtonModule,
    CommonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
  ],
  templateUrl: './navigation-bot.component.html',
  styleUrl: './navigation-bot.component.scss',
})
export class NavigationBotComponent {
  isChatbotVisible = false;
  userMessages: string[] = [];
  botMessages: string[] = [];
  initialMessage = 'Hello! Which Page do you want to navigate to ?';
  selectedOption = 'Hello! Which Page do you want to navigate to ?';

  navigationOptions = [
    { label: 'Home', path: '/home' },
    { label: 'Products', path: '/products' },
    { label: 'About-Us', path: '/about-us' },
    { label: 'Profile', path: '/profile' },
  ];

  constructor(private router: Router) {}
  toggleChatbot() {
    this.isChatbotVisible = !this.isChatbotVisible;

    if (this.isChatbotVisible) {
      this.userMessages = [];
      this.botMessages = [];
      this.initialMessage = 'Hello! Which Page do you want to navigate to ?';
    }
  }
  closeChatbot() {
    this.isChatbotVisible = false;
  }

  selectOption(optionLabel: string) {
    this.userMessages.push(optionLabel);
    const selectedOption = this.navigationOptions.find(
      (option) => option.label === optionLabel
    );
    if (selectedOption) {
      setTimeout(() => {
        this.botMessages.push(`Navigating to ${optionLabel}...`);
        setTimeout(() => {
          this.router.navigate([selectedOption.path]);
          setTimeout(() => this.closeChatbot(), 500);
        }, 1000);
      }, 500);
    }
  }
}
