import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Infosys',
      role: 'Technology Analyst',
      client: 'BNSF Railways',
      period: '2022 - Present',
      technologies: ['Angular', 'Spring Boot', 'Kafka', 'AWS'],
      description: 'Leading development of enterprise transportation management system. Architected microservices-based solutions handling millions of transactions daily.',
      icon: '🏢'
    },
    {
      company: 'HCL Technologies',
      role: 'Software Engineer',
      client: 'Deutsche Bank',
      period: '2020 - 2022',
      technologies: ['Angular', 'REST APIs', 'SQL', 'Java'],
      description: 'Developed and maintained trading platforms and financial dashboards. Implemented real-time data streaming and optimized database queries.',
      icon: '💼'
    }
  ];
}
