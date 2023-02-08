import { Component, Input, OnInit } from '@angular/core';
import { karticka_film_sport, ana } from '../model/model';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit{
  constructor(){ }
  @Input()
    karticka2:karticka_film_sport=ana;
  ngOnInit(){ }
}
