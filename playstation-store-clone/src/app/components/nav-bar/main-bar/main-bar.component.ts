import { Component } from '@angular/core';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css'],
})
export class MainBarComponent {
  logoUrl: String =
    'https://ww1.freelogovectors.net/wp-content/uploads/2022/01/playstationstorelogo-freelogovectors.net_.png?lossy=1&w=2560&ssl=';
  isOpenMenu: Boolean = false;

  toggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }
}
