import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  downloadResume() {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/Deebak_Resume.pdf';
    link.download = 'Deebak_P_Resume.pdf';
    link.click();
    this.closeMenu();
  }
}
