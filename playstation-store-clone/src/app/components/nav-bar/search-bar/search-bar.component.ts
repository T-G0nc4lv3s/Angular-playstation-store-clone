import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  secondaryLogoUrl: String =
    'https://www.freepnglogos.com/uploads/playstation-png-logo/navy-playstation-png-logo-5.png';
  searchParam = '';
  isPressed: Boolean = false;

  onPressed(): void {
    this.isPressed = !this.isPressed;
  }

  onRelease(): void {
    this.isPressed = !this.isPressed;
  }
}
