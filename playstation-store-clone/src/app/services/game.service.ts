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
        'https://images.tcdn.com.br/img/img_prod/1087887/spider_man_2_ps5_pre_venda_3681_1_e6627dcd2840600bc6f414ec36ffe47f.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj3: game = {
      imgUrl:
        'https://cdn.awsli.com.br/600x450/0/810/produto/1834301146d03bd98bb.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj4: game = {
      imgUrl:
        'https://images.tcdn.com.br/img/img_prod/687500/marvel_spider_man_miles_morales_edicao_ultimate_ps5_40561939_1_82f61355d0a7b894a1ed3e10d9c4e523.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj5: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/1678/1678184/produto/225695494f4070cc91d.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj6: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/416/416562/produto/230474224/fc24ps5-6b1v2462cc.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj7: game = {
      imgUrl:
        'https://images.tcdn.com.br/img/img_prod/1087887/jogo_horizon_forbidden_west_ps5_midia_fisica_549_2_12c939cd084dda6221c56de1868c158e.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj8: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/1678/1678184/produto/21244492746abcf47ad.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj9: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/1274/1274364/produto/195889409a4576abc7e.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj10: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/1605/1605600/produto/121489073d34142f47d.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj11: game = {
      imgUrl:
        'https://cdn.awsli.com.br/400x400/2115/2115748/produto/232188231/naruto-x-boruto-ultimate-ninja-storm-connections-747753-11-f8x6juwvcz.jpg',
      label: 'Exclusive',
      title: 'Play it Now!',
      type: 'DIGITAL PS5',
      price: 'US$ 199.29',
    };

    const obj12: game = {
      imgUrl:
        'https://cdn.awsli.com.br/300x300/1605/1605600/produto/2283975421c45eaf73b.jpg',
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
