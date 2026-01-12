import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  downloadResume() {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';
    link.download = 'Deebak_P_Resume.pdf';
    link.click();
  }
}
