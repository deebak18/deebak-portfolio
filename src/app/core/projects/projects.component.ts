import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Transportation Management System',
      tech: ['Angular', 'Spring Boot', 'Kafka', 'AWS'],
      desc: 'Enterprise transportation platform handling millions of shipments. Features real-time tracking, route optimization, and automated logistics management.',
      icon: '🚚',
      link: '#'
    },
    {
      name: 'Stock Trading Platform',
      tech: ['Angular', 'REST APIs', 'WebSocket', 'TypeScript'],
      desc: 'Real-time trading dashboards with live market data, portfolio management, and advanced charting capabilities.',
      icon: '📈',
      link: '#'
    },
    {
      name: 'Microservices E-Commerce Platform',
      tech: ['Spring Boot', 'Docker', 'Kubernetes', 'PostgreSQL'],
      desc: 'Scalable e-commerce solution with distributed architecture, payment integration, and inventory management.',
      icon: '🛒',
      link: '#'
    },
    {
      name: 'Real-time Chat Application',
      tech: ['Angular', 'WebSocket', 'Node.js', 'MongoDB'],
      desc: 'Modern chat application with group messaging, file sharing, and real-time notifications.',
      icon: '💬',
      link: '#'
    }
  ];
}
