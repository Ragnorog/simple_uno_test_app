import {Player} from '../model/player';
import {PileService} from './pile.service';
import {Injectable} from '@angular/core';

@Injectable()
export class PlayerService {
  private _players: Array<Player>;

  get players(): Array<Player> {
    return this._players;
  }

  constructor(private pileService: PileService) {
    this._players = new Array<Player>();
  }

  public initPlayers(playersAmount: number) {
    this._players.push(...Array
      .from(
        {length: playersAmount}, (v, k) => {
          return new Player(this.pileService.currentPile.splice(0, 7));
        }));
  }

  public botTurns() {
    this.players.forEach((player) => {
      if (player.bot) {
        const matchedCards = player.hand.filter(card => this.pileService.equalCard(card));
        if (matchedCards.length >= 1) {
          const index = player.hand.indexOf(matchedCards[0]);
          const card = player.hand.splice(index, 1);
          this.pileService.putCard(card[0]);
        } else if (this.pileService.currentPile.length > 1) {
          player.hand.push(this.pileService.currentPile.shift());
        } else {
          // skip turn message
        }
      }
    });
    this.checkForTheWinner();
  }

  public cleanPlayers() {
    this._players = new Array<Player>();
  }

  private checkForTheWinner() {
    this.players.forEach(player => {
      if (player.hand.length === 0) {
        alert('Player ' + (this.players.indexOf(player) + 1) + ' won');
      }
    });
  }
}
