import { Injectable } from '@angular/core';
import {TurnResourceService} from '../turn-resource/turn-resource.service';
import {Card} from '../../domain/card/Card';
import {PlayerDeck} from '../../domain/PlayerDeck';

@Injectable({
  providedIn: 'root'
})
export class TurnManagerService {
  private deck: PlayerDeck;
  hand: Card[];
  discardPile: Card[];
  private playedCardsCurrentRound: Card[] = [];


  constructor(private turnResourceService: TurnResourceService) { }

  playCard(card: Card) {
    this.generateResources(card);
    this.removeFromHand(card);
  }

  private removeFromHand(card: Card) {
    const removedFromHand = this.hand.splice(this.hand.indexOf(card), 1);
    this.playedCardsCurrentRound.push(removedFromHand[0]);
  }

  private generateResources(card: Card) {
    if (card.generatesDamage()) {
      this.turnResourceService.generateDamage(card.getDamage());
    }
    if (card.generatesGold()) {
      this.turnResourceService.generateGold(card.getGold());
    }
  }

  initializeNewGame() {
    this.createStarterDeck();
    this.drawHand();
  }

  drawHand() {
    this.hand = this.deck.drawHand();
  }

  private createStarterDeck() {
    this.deck = PlayerDeck.createStandardDeck();
  }

  getHand() {
    return this.hand;
  }
}
