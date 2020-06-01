import {Card} from './card/Card';
import {ShieldTrooper} from './card/starterdeck/ShieldTrooper';
import {ShieldAgent} from './card/starterdeck/ShieldAgent';

export class PlayerDeck {

  constructor(private cards: Card[]) {
    this.shuffle();
    console.log(this.cards);
  }

  static createStandardDeck() {
    return new PlayerDeck([
      new ShieldTrooper(),
      new ShieldTrooper(),
      new ShieldTrooper(),
      new ShieldTrooper(),

      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
      new ShieldAgent(),
    ]);
  }

  // TODO: rekening houden dat deck leeg kan geraken
  drawHand() {
    return [this.cards.pop(), this.cards.pop(), this.cards.pop(), this.cards.pop(), this.cards.pop(), this.cards.pop()];
  }

  private shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }
}
