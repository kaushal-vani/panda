import { Component } from '@angular/core';
import { AuthenticationPageComponent } from '@panda/panda/authentication/ui';

@Component({
  selector: 'lib-authentication',
  standalone: true,
  imports: [AuthenticationPageComponent],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {

}
