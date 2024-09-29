import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthenticationComponent } from '@panda/panda/authentication/smart';
import { HeaderComponent } from '@panda/panda/shared';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AuthenticationComponent, HeaderComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'panda-main';
}
