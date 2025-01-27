import { Component, inject, input } from '@angular/core';
import { HeroPowerStatsChange } from '../../shared/interfaces/hero-powerstats-change-interface';
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroService } from '../../shared/services/hero.service';
import { HeroItemComponent } from "../hero-item/hero-item.component";

@Component({
  selector: 'app-hero-list',
  imports: [HeroItemComponent],
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent {
  heroes = input.required<Hero[]>();
  readonly #heroService = inject(HeroService);

  savePowerStats({hero, powerstat, value }: HeroPowerStatsChange) {
    this.#heroService.update(hero, powerstat, value);
  }
}
