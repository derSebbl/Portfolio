import { Component, ElementRef, Renderer2, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  onBurgerClicked() {
    const burgerMenu = this.el.nativeElement.querySelector('#burgerMenu');
    if (burgerMenu) {
      const display = window.getComputedStyle(burgerMenu).display;
      if (display === 'none') {
        this.renderer.setStyle(burgerMenu, 'display', 'flex');
      }
    } 
  }

  openGitProfile() {
    window.open('https://github.com/derSebbl', '_blank');
}

openLinkedIn() {
  window.open('https://www.linkedin.com/in/sebastian-binz/', '_blank');
}

closeBurgerMenu() {
  const burgerMenu = this.el.nativeElement.querySelector('#burgerMenu');

  if (burgerMenu) {
    this.renderer.setStyle(burgerMenu, 'display', 'none');
  } 
}

@HostListener('window:resize', ['$event'])
onResize(event: { target: { innerWidth: number; }; }) {
  if (event.target.innerWidth > 1124) {
    this.closeBurgerMenu();
  }
}

}
