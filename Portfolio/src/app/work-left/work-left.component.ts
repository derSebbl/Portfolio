import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-left',
  standalone: true,
  imports: [],
  templateUrl: './work-left.component.html',
  styleUrl: './work-left.component.scss'
})
export class WorkLeftComponent {

  constructor() { }

  @Input() header: string | undefined;
  @Input() skills: string | undefined;
  @Input() image: string | undefined;
  @Input() description: string | undefined;


  getBackgroundStyle() {
    return this.image ? `url(${this.image}) no-repeat 100% 100%` : '';
  }

}
