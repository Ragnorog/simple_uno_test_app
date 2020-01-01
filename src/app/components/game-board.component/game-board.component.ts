import {Component} from '@angular/core';
import {PlayerService} from '../../services/player.service';
import {Player} from '../../model/player';
import {PileService} from '../../services/pile.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.sass']
})
export class GameBoardComponent {
  get players(): Array<Player> {
    return this.playerService.players;
  }

  constructor(private playerService: PlayerService,
              private pileService: PileService,
              private router: Router) {
    if (this.playerService.players.length === 0) {
      window.history.back();
    }
  }

  endGame() {
    this.playerService.cleanPlayers();
    this.pileService.cleanPile();
    window.history.back();
  }
  menuOn() {
    document.getElementById('overlay').style.display = 'block';
  }

  menuOff() {
    document.getElementById('overlay').style.display = 'none';
  }
}

