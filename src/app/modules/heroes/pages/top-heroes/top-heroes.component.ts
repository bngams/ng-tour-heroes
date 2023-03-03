import { Component } from '@angular/core';
import { HEROES_MOCK } from '../../mocks/heroes.mock';
import { Heroes } from '../../models/hero';

@Component({
  selector: 'app-top-heroes',
  templateUrl: './top-heroes.component.html',
  styleUrls: ['./top-heroes.component.scss']
})
export class TopHeroesComponent {
  heroes: Heroes = HEROES_MOCK;
}
