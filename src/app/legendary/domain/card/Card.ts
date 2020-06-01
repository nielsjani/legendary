import {CardArt} from './CardArt';

export class Card {

  constructor(
    private name: string,
    private art: CardArt,
    private damage?: number,
    private gold?: number,
    private cost?: number) {
  }

  getName(): string {
    return this.name;
  }

  getArt(): CardArt {
    return this.art;
  }

  getDamage(): number {
    return this.damage;
  }

  getGold(): number {
    return this.gold;
  }

  getCost(): number {
    return this.cost;
  }

  //  TODO: '+' toevoegen als kaart extra dmg / gold kan genereren
  getHeaderInfo() {
    return `${this.getName()} ${this.getHeaderDamage()} ${this.getHeaderGold()}`;
  }

  private getHeaderDamage() {
    return this.getDamage() ? `DMG ${this.getDamage()}` : '';
  }

  private getHeaderGold() {
    return this.getGold() ? `$${this.getGold()}` : '';
  }

  generatesDamage() {
    return this.getDamage() > 0;
  }

  generatesGold() {
    return this.getGold() > 0;
  }
}
