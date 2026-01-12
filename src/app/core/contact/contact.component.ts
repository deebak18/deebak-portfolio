import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactInfo = {
    email: 'deebakperumal@gmail.com',
    linkedin: 'linkedin.com/in/deebak-p',
    github: 'github.com/deebak-p'
  };

  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    // In a real application, you would send this to a backend
    console.log('Form submitted:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.formData = { name: '', email: '', message: '' };
  }
}
