import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() burgerClicked = new EventEmitter<void>();

  onBurgerClick() {
    this.burgerClicked.emit();
  }


  changeLanguage() {
    var enElements = document.querySelectorAll('.en');
    var gerElements = document.querySelectorAll('.ger');

    gerElements.forEach(function(element) {
      if ((element as HTMLElement).style.display === '' || (element as HTMLElement).style.display === 'none') {
        (element as HTMLElement).style.display = 'block';
      } else {
        (element as HTMLElement).style.display = 'none';
      }
    });

    enElements.forEach(function(element) {
      if ((element as HTMLElement).style.display === '' || (element as HTMLElement).style.display === 'block') {
        (element as HTMLElement).style.display = 'none';
      } else {
        (element as HTMLElement).style.display = 'block';
      }
    });
  }
}
