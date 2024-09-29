import { Component } from '@angular/core';
import { AboutUsPageComponent } from '@panda/panda/about-us/ui';

@Component({
  selector: 'lib-about-us',
  standalone: true,
  imports: [AboutUsPageComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

}
