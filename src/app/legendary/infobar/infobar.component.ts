import { Component, OnInit } from '@angular/core';
import {TurnResourceService} from '../service/turn-resource/turn-resource.service';

@Component({
  selector: 'app-infobar',
  templateUrl: './infobar.component.html',
  styleUrls: ['./infobar.component.css']
})
export class InfobarComponent implements OnInit {
  private totalGold: number;
  private totalDamage: number;

  constructor(private turnResourceService: TurnResourceService) { }

  ngOnInit() {
    this.turnResourceService.listenToTotalDamageGenerated().subscribe(data => {
      this.totalDamage = data;
    });
    this.turnResourceService.listenToTotalGoldGenerated().subscribe(data => {
      this.totalGold = data;
    });
  }

  getTotalDamage() {
    return this.totalDamage;
  }

  getTotalGold() {
    return this.totalGold;
  }
}
