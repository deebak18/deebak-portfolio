import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 90, icon: '⚡' },
    { name: 'TypeScript', level: 85, icon: '📘' },
    { name: 'Java', level: 88, icon: '☕' },
    { name: 'Spring Boot', level: 85, icon: '🌱' },
    { name: 'Microservices', level: 80, icon: '🔧' },
    { name: 'Kafka', level: 75, icon: '📨' },
    { name: 'AWS', level: 78, icon: '☁️' },
    { name: 'Docker', level: 82, icon: '🐳' },
    { name: 'SQL', level: 85, icon: '🗄️' },
    { name: 'REST APIs', level: 88, icon: '🌐' }
  ];
}
