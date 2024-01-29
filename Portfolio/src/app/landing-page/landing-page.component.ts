import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  openGitProfile() {
    window.open('https://github.com/derSebbl', '_blank');
}

openLinkedIn() {
  window.open('https://www.linkedin.com/in/sebastian-binz-00a2502a8/', '_blank');
}

}
