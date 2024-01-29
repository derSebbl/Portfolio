import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './main-content/landing-page/landing-page.component';
import { NavbarComponent } from './main-content/landing-page/navbar/navbar.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { SkillsComponent } from './main-content/skills/skills.component';
import { WorkLeftComponent } from './main-content/my-work/work-left/work-left.component';
import { WorkRightComponent } from './main-content/my-work/work-right/work-right.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MyWorkComponent } from './main-content/my-work/my-work.component';
import { CircleComponent } from './circle/circle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent, AboutMeComponent,
            SkillsComponent, WorkLeftComponent, WorkRightComponent, ContactComponent, FooterComponent, MyWorkComponent, CircleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

}
