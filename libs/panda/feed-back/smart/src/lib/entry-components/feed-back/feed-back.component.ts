import { Component } from '@angular/core';
import { FeedBackPageComponent } from '@panda/panda/feed-back/ui';

@Component({
  selector: 'lib-feed-back',
  standalone: true,
  imports: [FeedBackPageComponent],
  templateUrl: './feed-back.component.html',
  styleUrl: './feed-back.component.scss'
})
export class FeedBackComponent {

}
