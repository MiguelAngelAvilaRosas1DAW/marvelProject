import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeroFormComponent } from "../../../components/hero-form/hero-form.component";
import { Hero } from '../../../shared/interfaces/hero.interface';
import { HeroService } from '../../../shared/services/hero.service';

@Component({
  selector: 'app-hero-new',
  imports: [HeroFormComponent],
  template: `
  <div class="flex flex-col items-center bg-[cadetblue]">
    <h3 class="text-2xl font-bold text-white">Add an hero!</h3>
    <app-hero-form (sendHero)="addHero($event)"/>
  </div>`,
})
export class HeroNewComponent {
  readonly #heroService = inject(HeroService);
  readonly #router = inject(Router);

  addHero(hero: Hero) {
    console.log("Creating Hero", hero);
    this.#heroService.add(hero);
    this.#router.navigate(['/home']);
  }
}
