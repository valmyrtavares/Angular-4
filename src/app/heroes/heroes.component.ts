import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero"
import { FEMME } from '../mock-heroes';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent implements OnInit {

  Pegazus = FEMME;
  selectedHero: Hero;

  agatha = "Cheval"
  hero: Hero = {
    id: 1,
    name: "xutz"
  }


  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
