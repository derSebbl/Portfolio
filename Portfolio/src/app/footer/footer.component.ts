import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule],
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

scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}

}
