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
  @Input() linkGit: string | undefined;
  @Input() linkLive: string | undefined;

  openWork() {
    window.open(this.linkLive, '_blank');
  }

  openGit() {
    window.open(this.linkGit, '_blank');
  }
}
