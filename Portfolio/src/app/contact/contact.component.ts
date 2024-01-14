import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
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
}
