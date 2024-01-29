import { Component } from '@angular/core';
import { MyWorkComponent } from './my-work/my-work.component'; 
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsComponent } from './skills/skills.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [MyWorkComponent, AboutMeComponent, ContactComponent, SkillsComponent, LandingPageComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
