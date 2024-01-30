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
}
