import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'lib-feed-back-overlay',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './feed-back-overlay.component.html',
  styleUrl: './feed-back-overlay.component.scss'
})
export class FeedBackOverlayComponent {
  constructor(private router: Router) {}

  navigateToFeedback() {
    this.router.navigate(['/feed-back']);
  }
}