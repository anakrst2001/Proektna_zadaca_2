import { Component, Input, OnInit } from '@angular/core';
import { karticka_muzika4, x } from '../model/model';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.css']
})
export class Card5Component implements OnInit{
  constructor(){ }
  @Input()
    karticka5:karticka_muzika4=x;
  ngOnInit(){ }
}
