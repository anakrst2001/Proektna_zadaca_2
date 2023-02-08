import { Component, Input, OnInit } from '@angular/core';
import { karticka_muzika3, dejan } from '../model/model';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component implements OnInit{
    constructor(){ }
    @Input()
      karticka4:karticka_muzika3=dejan;
    ngOnInit(){ }
}
