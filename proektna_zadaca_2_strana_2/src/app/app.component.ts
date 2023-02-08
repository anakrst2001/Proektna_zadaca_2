import { Component } from '@angular/core';
import { karticka_film_sport, karticka_muzika1, karticka_muzika2, karticka_muzika3, karticka_muzika4, karticka_muzika5 } from 'src/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proektna_strana_2';
  prva_muzika=karticka_muzika1[0];
  vtora_muzika=karticka_muzika1[1];
  treta_muzika=karticka_muzika2[0];
  muzika4=karticka_muzika3[0];
  muzika5=karticka_muzika4[0];
  muzika6=karticka_muzika5[0];
  muzika7=karticka_muzika5[1];
  card_film_sport=karticka_film_sport[0];
  card_film_sport2=karticka_film_sport[1];
  card_film_sport3=karticka_film_sport[2];
  card_film_sport4=karticka_film_sport[3];
  card_film_sport5=karticka_film_sport[4];
  card_film_sport6=karticka_film_sport[5];
  card_film_sport7=karticka_film_sport[6];
  card_film_sport8=karticka_film_sport[7];
}
