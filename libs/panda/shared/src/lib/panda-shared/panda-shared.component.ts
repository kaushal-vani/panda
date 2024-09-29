import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-panda-shared',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panda-shared.component.html',
  styleUrl: './panda-shared.component.css',
})
export class PandaSharedComponent {}
