import { Component } from '@angular/core';
import { Location } from '@angular/common'; 

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

  constructor(private location: Location) { }

  back(){
    this.location.back();
  }
}
