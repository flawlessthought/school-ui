import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Property to track the currently active button
  activeButton: string;

  constructor() {
    // Initialize the active button. You can set it to 'skills' or 'community' based on your default view
    this.activeButton = 'skills'; // or 'community'
  }

  // Method to toggle the active button
  toggleActive(button: string) {
    this.activeButton = button;
  }
}
