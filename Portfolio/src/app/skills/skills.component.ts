import { Component, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const target = event.target as Window;
    const htmlElement = this.el.nativeElement.querySelector('#html');
    const scrumElement = this.el.nativeElement.querySelector('#scrum');
    const skillRowBottomElement =
      this.el.nativeElement.querySelector('.skillRowBottom');
    const skillRowTopElement =
      this.el.nativeElement.querySelector('.skillRowTop');
    if (target.innerWidth < 745) {
      if (htmlElement && scrumElement && skillRowBottomElement) {
        this.renderer.appendChild(skillRowBottomElement, htmlElement);
        this.renderer.appendChild(skillRowBottomElement, scrumElement);
      }
    }
    if (target.innerWidth > 745) {
      if (htmlElement && scrumElement && skillRowBottomElement) {
        if (
          skillRowBottomElement.contains(scrumElement) &&
          skillRowBottomElement.contains(htmlElement)
        ) {
          this.renderer.appendChild(skillRowTopElement, htmlElement);
          this.renderer.appendChild(skillRowTopElement, scrumElement);
        }
      }
    }
  }
}
