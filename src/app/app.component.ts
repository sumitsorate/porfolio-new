import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [SkillsComponent, CommonModule, RouterOutlet, ExperiencesComponent,ContactComponent]
})
export class AppComponent implements OnInit {
  title = 'my-portfolio';
  isLoaded: boolean = false;
  menuOpened: boolean = true;
  selectTab: string = 'intro';
  headingText: string = 'Intro.';
  subHeadingText: string = 'All about me';
  screenWidth = window.screen.width;

  ngOnInit(): void {
    if(this.screenWidth<768)
    this.menuOpened = false;
  }

  changeTab(tabname: string) {
    switch (tabname) {
      case 'intro':
        {
          this.selectTab = 'intro'
          this.headingText = 'intro.'
          this.subHeadingText = 'All about me'
          break;
        }
      case 'skills':
        {
          this.selectTab = 'skills'
          this.headingText = 'skills'
          this.subHeadingText = 'All that i know'
          break;
        }
      case 'experience':
        {
          this.selectTab = 'experience'
          this.headingText = 'experience'
          this.subHeadingText = 'All that i have'
          break;
        }
      case 'work':
        {
          this.selectTab = 'work'
          this.headingText = 'work'
          this.subHeadingText = 'All that i do'
          break;
        }
      case 'contact':
        {
          this.selectTab = 'contact'
          this.headingText = 'contact'
          this.subHeadingText = 'All that you can reach to me'
          break;
        }

      default:
        break;
    }
  }
}
