import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  isHovering = false;

  name: string = '';
  email: string = '';
  message: string = '';
  nameField: any;
  privacy: any;

  ngOnInit() {
    this.checkInputValues();
  }

  checkInputValues() {
    let inputs = document.querySelectorAll('.nameInput input, .mailInput input, .textInput textarea');
    inputs.forEach((inputElement) => {
      if (inputElement instanceof HTMLInputElement || inputElement instanceof HTMLTextAreaElement) {
        inputElement.addEventListener('input', () => {
          if (inputElement.value.trim() === '') {
            inputElement.parentElement?.classList.remove('not-empty');
          } else {
            inputElement.parentElement?.classList.add('not-empty');
          }
        });
      }
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  @HostListener('mouseover', ['$event.target.id'])
  onMouseOver(id: string) {
    if (id === 'checkbox') {
      this.isHovering = true;
    }
  }

  @HostListener('mouseout', ['$event.target.id'])
  onMouseOut(id: string) {
    if (id === 'checkbox') {
      this.isHovering = false;
    }
  }
}
