import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroFormComponent } from "../../../components/hero-form/hero-form.component";
import { HeroItemNotFoundComponent } from "../../../components/hero-item-not-found/hero-item-not-found.component";
import { Hero } from '../../../shared/interfaces/hero.interface';
import { HeroService } from '../../../shared/services/hero.service';

@Component({
  selector: 'app-hero-update',
  imports: [HeroFormComponent, HeroItemNotFoundComponent],
  template: `
  @if(isValidHero()) {
  <div class="flex flex-col items-center bg-[rgb(94, 104, 255)]">
    <h3 class="text-2xl font-bold text-white">Update an Hero!</h3>
    <app-hero-form [hero]="hero" (sendHero)="updateHero($event)"/>
  </div>
  } @else {
    <app-hero-item-not-found />
  }`
})
export class HeroUpdateComponent {
  readonly #heroService = inject(HeroService);
  readonly #router = inject(Router);
  readonly #activatedRouter = inject(ActivatedRoute);
  hero: Hero = this.#activatedRouter.snapshot.data['hero'];
  isValidHero = computed(() => !this.#heroService.isNullHero(this.hero))

  updateHero(hero: any) {
    console.log('Updating Hero', hero);
    this.#heroService.update(hero);
    this.#router.navigate(['/home']);
  }

}
