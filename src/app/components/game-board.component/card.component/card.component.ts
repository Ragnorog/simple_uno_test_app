import {Component, Input} from '@angular/core';
import {PileService} from '../../../services/pile.service';
import {Card} from '../../../model/card';
import {CardColorType} from '../../../model/card-color-type';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input()
  card: Card;

  @Input()
  showCardInfo: boolean

  constructor(private pileService: PileService) {

  }

  getColorText(card): string {
    return CardColorType[card.color];
  }
}
