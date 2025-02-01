import { Component, computed, inject, input, numberAttribute } from '@angular/core';
import { HeroItemNotFoundComponent } from '../../../components/hero-item-not-found/hero-item-not-found.component';
import { HeroItemComponent } from "../../../components/hero-item/hero-item.component";
import { Hero } from '../../../shared/interfaces/hero.interface';
import { HeroService } from '../../../shared/services/hero.service';

@Component({
  selector: 'app-hero-detail',
  imports: [HeroItemComponent, HeroItemNotFoundComponent],
  template: `
  @if(this.isValidHero()) {
    <app-hero-item [hero]="hero()" />
  } @else {
    <app-hero-item-not-found />
  }`,
})
export class HeroDetailComponent {
  id = input(0, {transform: numberAttribute} );
  readonly #heroService = inject(HeroService);
  hero = computed<Hero>(() => this.#heroService.findOne(this.id()));
  isValidHero = computed(() => !this.#heroService.isNullHero(this.hero()))
}