import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-right',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-right.component.html',
  styleUrl: './work-right.component.scss'
})
export class WorkRightComponent {

  constructor() { }

  @Input() header: string | undefined;
  @Input() skills: string | undefined;
  @Input() image: string | undefined;
  @Input() description: string | undefined;

}
