import { Component, Input, OnInit } from '@angular/core';
import { karticka_muzika5, y } from '../model/model';

@Component({
  selector: 'app-card6',
  templateUrl: './card6.component.html',
  styleUrls: ['./card6.component.css']
})
export class Card6Component implements OnInit {
  constructor(){ }
  @Input()
    karticka6:karticka_muzika5=y;
  ngOnInit(){ }
}
