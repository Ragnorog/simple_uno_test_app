import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.sass']
})
export class MainMenuComponent {
  constructor(private router: Router,
              private playerService: PlayerService) {

  }

  public startGame() {
    this.playerService.initPlayers(4);
    this.selectPlayer(0);
    this.router.navigateByUrl('/board');
  }

  public selectPlayer(number: number) {
    this.playerService.players[number].bot = false;
  }

}
