import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'lib-page-not-found',
  standalone: true,
  imports: [CardModule,
    ButtonModule,],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {
  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/home']);
  }
}