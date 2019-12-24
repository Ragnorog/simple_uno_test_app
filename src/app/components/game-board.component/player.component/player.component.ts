import {Component, Input} from '@angular/core';
import {Player} from '../../../model/player';
import {PlayerService} from '../../../services/player.service';
import {PileService} from '../../../services/pile.service';
import {Card} from '../../../model/card';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {
  @Input()
  player: Player;

  constructor(private playerService: PlayerService,
              private pileService: PileService) {

  }

  public getCard() {
    this.pileService.getCard(this.player);
    this.playerService.botTurns();
  }

  public putCard(card: Card) {
    const res = this.pileService.putCard(card);
    if (res) {
      const index = this.player.hand.indexOf(card);
      this.player.hand.splice(index, 1);
      this.playerService.botTurns();
    }
  }
}
