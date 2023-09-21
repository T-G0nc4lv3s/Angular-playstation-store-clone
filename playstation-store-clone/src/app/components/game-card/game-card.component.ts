import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css'],
})
export class GameCardComponent {
  @Input()
  imageUrl: String = '';
  @Input()
  cardLabel: String = '';
  @Input()
  title: String = '';
  @Input()
  gameType: String = '';
  @Input()
  gamePrice: String = '';
}
