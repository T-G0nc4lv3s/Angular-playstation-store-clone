import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  logoUrl: String =
    'https://www.pngall.com/wp-content/uploads/13/PlayStation-Logo-PNG-Photos.png';
  searchParam: String = '';
  isPressed: Boolean = false;

  onPressed(): void {
    this.isPressed = !this.isPressed;
  }

  onRelease(): void {
    this.isPressed = !this.isPressed;
  }
}
