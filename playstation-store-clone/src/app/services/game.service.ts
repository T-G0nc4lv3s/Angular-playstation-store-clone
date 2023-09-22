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
      price: 'US$ 199.29',
    };

    const obj2: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj3: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj4: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj5: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj6: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj7: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj8: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj9: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj10: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj11: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj12: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/2154/2154653/produto/131161269/56048b0da8.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const games: game[] = [
      obj1,
      obj2,
      obj3,
      obj4,
      obj5,
      obj6,
      obj7,
      obj8,
      obj9,
      obj10,
      obj11,
      obj12,
    ];
    return games;
  }
}
