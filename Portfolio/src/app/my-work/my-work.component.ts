import { Component } from '@angular/core';
import { WorkLeftComponent } from './work-left/work-left.component';
import { WorkRightComponent } from './work-right/work-right.component';

@Component({
  selector: 'app-my-work',
  standalone: true,
  imports: [WorkLeftComponent, WorkRightComponent],
  templateUrl: './my-work.component.html',
  styleUrl: './my-work.component.scss'
})
export class MyWorkComponent {

}
