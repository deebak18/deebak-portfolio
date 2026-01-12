import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  name = 'Deebak P';
  title = 'Full Stack Developer';
  subtitle = 'Angular | Spring Boot | Microservices';
  description = 'Building scalable enterprise applications with modern technologies';
  
  scrollToSection(section: string) {
    const element = document.querySelector(`#${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/Deebak_Resume.pdf';
    link.download = 'Deebak_P_Resume.pdf';
    link.click();
  }
}
