import { Component, Input, OnInit } from '@angular/core';
import { karticka_muzika2, vesna } from '../model/model';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit{
  constructor(){ }
  @Input()
    karticka3:karticka_muzika2=vesna;
  ngOnInit(){ }
}
