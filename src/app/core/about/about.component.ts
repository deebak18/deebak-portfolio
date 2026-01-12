import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about = {
    name: 'Deebak P',
    title: 'Full Stack Developer',
    experience: '5+ years',
    description: 'Passionate Full Stack Developer with 5+ years of experience building scalable enterprise applications. Specialized in Angular, Spring Boot, and microservices architecture. I love solving complex problems and creating efficient, maintainable code.',
    highlights: [
      'Expert in Angular and TypeScript',
      'Strong background in Java and Spring Boot',
      'Experience with microservices and event-driven architecture',
      'Proficient in cloud technologies (AWS)',
      'Skilled in database design and optimization'
    ]
  };
}
