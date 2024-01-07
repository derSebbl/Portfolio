import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-right',
  standalone: true,
  imports: [],
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
