import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  openGitProfile() {
    window.open('https://github.com/derSebbl', '_blank');
}

openLinkedIn() {
  window.open('https://www.linkedin.com/in/sebastian-binz-00a2502a8/', '_blank');
}

}
