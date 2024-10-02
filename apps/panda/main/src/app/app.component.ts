import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent, NavigationBotComponent } from '@panda/panda/shared';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, NavigationBotComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'panda-main';
}
