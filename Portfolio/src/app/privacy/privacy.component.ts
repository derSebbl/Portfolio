import { Component } from '@angular/core';
import { Location } from '@angular/common'; 
import { NavbarComponent } from '../main-content/landing-page/navbar/navbar.component'; 

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(private location: Location) { }

  back(){
    this.location.back();
  }
}
