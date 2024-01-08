import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavbarComponent } from './landing-page/navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkLeftComponent } from './my-work/work-left/work-left.component';
import { WorkRightComponent } from './my-work/work-right/work-right.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MyWorkComponent } from './my-work/my-work.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LandingPageComponent, NavbarComponent, AboutMeComponent,
            SkillsComponent, WorkLeftComponent, WorkRightComponent, ContactComponent, FooterComponent, MyWorkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';

}
