import {Injectable} from '@angular/core';
import {Card} from '../model/card';
import {CardColorType} from '../model/card-color-type';
import {Player} from '../model/player';

@Injectable()
export class PileService {
  private _currentPIle: Array<Card>;

  get currentPile(): Array<Card> {
    return this._currentPIle;
  }

  constructor() {
    this._currentPIle = this.generatePile();
    this.shufflePile();
  }

  public getCard(player: Player): void {
    player.hand.push(this.currentPile.shift());
  }

  public putCard(card: Card): boolean {
    if (this.equalCard(card)) {
      this.currentPile.unshift(card);
      return true;
    }
    return false;
  }

  public cleanPile() {
    this._currentPIle = new Array<Card>();
  }

  public equalCard(card: Card) {
    return card.color === this.currentPile[0].color || card.value === this.currentPile[0].value;
  }

  private generatePile(): Array<Card> {
    const cards: Array<Card> = new Array<Card>();
    for (let i = 0; i < 4; i++) {
      cards.push(
        ...Array
          .from(
            {length: 19},
            (v, k) => {
              k = k > 9 ? k - 9 : k;
              return {
                value: k,
                color: i as CardColorType,
              };
            }));
    }
    console.log(cards);
    return cards;
  }

  private shufflePile() {
    this._currentPIle.sort(() => Math.random() - 0.5);
  }
}
