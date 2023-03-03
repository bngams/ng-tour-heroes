import { Component } from '@angular/core';
import { HEROES_MOCK } from '../../mocks/heroes.mock';
import { Heroes } from '../../models/hero';

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.scss']
})
export class AllHeroesComponent {
  heroes: Heroes = HEROES_MOCK;
}
