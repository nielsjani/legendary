import {Component, OnInit} from '@angular/core';
import {PlayerDeck} from '../domain/PlayerDeck';
import {Card} from '../domain/card/Card';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {TurnResourceService} from '../service/turn-resource/turn-resource.service';
import {TurnManagerService} from '../service/turn-manager/turn-manager.service';

@Component({
  selector: 'app-player-field',
  templateUrl: './player-field.component.html',
  styleUrls: ['./player-field.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('slidDown', style({
        'margin-top': '7vh',
        'max-height': '23vh'
      })),
      state('slidUp', style({
        'margin-top': '1vh',
        'max-height': '29vh'
      })),
      transition('slidDown => slidUp', [
        animate('0.2s')
      ])
    ])
  ]
})
export class PlayerFieldComponent implements OnInit {
  private hoveredCard: Card;

  constructor(private turnManagerService: TurnManagerService) {
  }

  ngOnInit() {
    this.turnManagerService.initializeNewGame();
  }

  hoveringOverCard(card: Card) {
    this.hoveredCard = card;
  }

  leaveHoveringOverCard(card: Card) {
    this.hoveredCard = undefined;
  }

  isHoveringOver(card: Card) {
    return card === this.hoveredCard;
  }

  showCardDetail(card: Card) {
    //  todo: toggle detail view of card
  }

  getHand() {
    return this.turnManagerService.getHand();
  }

  play(card: Card) {
    this.turnManagerService.playCard(card);
  }
}
