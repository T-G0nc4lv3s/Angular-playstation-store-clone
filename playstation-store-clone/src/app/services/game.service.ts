import { Injectable } from '@angular/core';
import { game } from '../types/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  constructor() {}

  getGames(): Array<game> {
    const obj1: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'U$ 199.29',
    };

    const obj2: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'U$ 199.29',
    };

    const obj3: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'U$ 199.29',
    };

    const obj4: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'U$ 199.29',
    };

    const games: game[] = [obj1, obj2, obj3, obj4];
    return games;
  }
}
