import {Card} from './card';

export class Player {
  hand: Array<Card>;
  bot: boolean;

  constructor(hand: Array<Card>, bot: boolean = true) {
    this.bot = bot;
    this.hand = hand;
  }
}
