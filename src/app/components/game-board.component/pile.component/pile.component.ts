import {Component} from '@angular/core';
import {PileService} from '../../../services/pile.service';
import {Card} from '../../../model/card';
import {CardColorType} from '../../../model/card-color-type';

@Component({
  selector: 'app-pile',
  templateUrl: './pile.component.html',
  styleUrls: ['./pile.component.sass']
})
export class PileComponent {

  get pile(): Array<Card> {
    return this.pileService.currentPile;
  }

  get pileLength(): number {
    return this.pile.length;
  }

  get topPileCard(): Card {
    return this.pile[0];
  }

  constructor(private pileService: PileService) {

  }
}
