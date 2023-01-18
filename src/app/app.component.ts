/*
  File: app.component.html
  Author: Korcsmaros Kende Andras
  Copyright: 2023, Korcsmaros Kende Andras
  Group: Szoft II/N
  Date: 2023-01-18
  Github: https://github.com/KendeAndras/
  Licenc: GNU GPL
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idomunka';

  processLength !: number;
  fRatePerRev !: number;
  torque !: number;
  ptime !: number;

  calcProcessingTime():void{
    this.ptime = this.processLength/(this.fRatePerRev*this.torque)
  }

  constructor(){}
}
