import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HeroFormComponent } from "../../../components/hero-form/hero-form.component";
import { Hero } from '../../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-update',
  imports: [HeroFormComponent],
  template: `
  <div class="flex flex-col items-center bg-[rgb(94, 104, 255)]">
    <h3 class="text-2xl font-bold text-white">Update an Hero!</h3>
    <app-hero-form (sendHero)="updateHero($event)"/>
  </div>`
})
export class HeroUpdateComponent {

  readonly #router = inject(Router);

updateHero(_hero: any) {
  const hero: Hero = {
    ..._hero,
    id: Math.floor(Math.random() * 1000) + 1,
  }
  console.log('Updating Hero', hero);
  this.#router.navigate(['/home']);
}

}
