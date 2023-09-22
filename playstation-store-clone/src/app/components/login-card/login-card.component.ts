import { Component } from '@angular/core';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.css'],
})
export class LoginCardComponent {
  mainLogoUrl: String =
    'https://www.blugraphic.com/wp-content/uploads/2014/05/Sony2.jpg';
  secondaryLogoUrl: String =
    'https://static.vecteezy.com/system/resources/previews/024/039/060/non_2x/playstation-logo-transparent-free-png.png';
  email: String = '';
  password: String = '';
  isPressed: Boolean = false;

  onPressed(): void {
    this.isPressed = !this.isPressed;
  }

  onRelease(): void {
    this.isPressed = !this.isPressed;
  }
}
