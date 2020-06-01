import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TurnResourceService {

  private damageGenerated = new BehaviorSubject<number>(0);
  private goldGenerated = new BehaviorSubject<number>(0);
  private totalGold = 0;
  private totalGoldGenerated = new BehaviorSubject<number>(this.totalGold);
  private totalDamage = 0;
  private totalDamageGenerated = new BehaviorSubject<number>(this.totalDamage);

  constructor() {
    this.manageTotals();
  }

  listenToDamageGenerated() {
    return this.damageGenerated.asObservable();
  }

  listenToGoldGenerated() {
    return this.goldGenerated.asObservable();
  }

  listenToTotalGoldGenerated() {
    return this.totalGoldGenerated.asObservable();
  }

  listenToTotalDamageGenerated() {
    return this.totalDamageGenerated.asObservable();
  }

  generateGold(amount: number) {
    this.goldGenerated.next(amount);
  }

  generateDamage(amount: number) {
    this.damageGenerated.next(amount);
  }

  private manageTotals() {
    this.listenToGoldGenerated().subscribe(data => {
      this.totalGold += data;
      this.totalGoldGenerated.next(this.totalGold);
    });
    this.listenToDamageGenerated().subscribe(data => {
      this.totalDamage += data;
      this.totalDamageGenerated.next(this.totalDamage);
    });
  }
}
