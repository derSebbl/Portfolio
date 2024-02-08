import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HostListener } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule], 
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})

export class ContactComponent {
  emailPattern = '^[a-z0-9._%+]+@[a-z0-9.]+\\.[a-z]{2,4}$';

  isHovering = false;

  http = inject(HttpClient);

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


//sendMail//
  
mailTest = false;

  contactData = {
    name: '',
    email: '',
    message: '',
  };

  post = {
    endPoint: 'https://sebastianbinz.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: any) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      ngForm.resetForm();
      console.log('ohne mail aber abgeschlossen');
    }
  }

}