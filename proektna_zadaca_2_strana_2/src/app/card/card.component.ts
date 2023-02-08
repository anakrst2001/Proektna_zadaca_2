import { Component, Input, OnInit } from '@angular/core';
import { karticka_muzika, suzi } from '../model/model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    constructor(){ }
    @Input()
      karticka:karticka_muzika=suzi;
    ngOnInit(){ }
}
