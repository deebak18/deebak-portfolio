import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 'Advanced', icon: '⚡' },
    { name: 'TypeScript', level: 'Advanced', icon: '📘' },
    { name: 'Java', level: 'Advanced', icon: '☕' },
    { name: 'Spring Boot', level: 'Advanced', icon: '🌱' },
    { name: 'Microservices', level: 'Advanced', icon: '🔧' },
    { name: 'Kafka', level: 'Intermediate', icon: '📨' },
    { name: 'AWS', level: 'Intermediate', icon: '☁️' },
    { name: 'Docker', level: 'Intermediate', icon: '🐳' },
    { name: 'SQL', level: 'Intermediate', icon: '🗄️' },
    { name: 'REST APIs', level: 'Advanced', icon: '🌐' }
  ];
}
