import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
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
  @ViewChild('contactForm') contactForm: any;
  @ViewChild('mailField') mailField: any;
  @ViewChild('textField') textField: any;
  @ViewChild('nameField') nameField: any;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{1,}$';

  isHovering = false;

  name: string = '';
  email: string = '';
  message: string = '';
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

  async sendMail() {
    let nameField = document.getElementById('nameField') as HTMLInputElement;
    let textField = document.getElementById('textField') as HTMLInputElement;
    let mailField = document.getElementById('emailField') as HTMLInputElement;

    let fd = new FormData();
    fd.append('name', nameField?.value); 
    fd.append('text', textField?.value); 
    fd.append('email', mailField?.value); 

    try {
      await fetch('http://sebastianbinz.com/send_mail/send_mail.php', {
        method: 'POST',
        body: fd
      })
    } catch (error) {
      console.error('Fehler beim Senden der Mail:', error);
    }
    this.clearContactValues();
  } 


clearContactValues() {
  this.mailField.reset();
  this.textField.reset();
  this.nameField.reset();
  this.privacy = false;
}

}