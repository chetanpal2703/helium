import { Component, ViewChild,HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Reference to MatSidenav
  @ViewChild('sidenav', { static: true }) sidenav!: MatSidenav;
    // Flags to control the visibility of option lists
    showAdminOptions = false;
    showUserOptions = false;

  // Flag to control visibility of the toggle button
  isToggleVisible = false;

  constructor() {
    // Initially, check the screen width and set the flag accordingly
    this.checkScreenWidth();
  }

  // Method to toggle the side navigation
  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleList(type: string) {
    if (type === 'admin') {
      this.showAdminOptions = !this.showAdminOptions;
      this.showUserOptions = false;
    } else if (type === 'user') {
      this.showUserOptions = !this.showUserOptions;
      this.showAdminOptions = false;
    }
  }

  // Listen for window resize events to update the toggle button visibility
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  // Check the screen width and set the toggle button visibility accordingly
  private checkScreenWidth() {
    this.isToggleVisible = window.innerWidth < 768; // Adjust the breakpoint as needed
  }
  title = 'helium';
}
