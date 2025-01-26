import { Component, inject } from '@angular/core';
import { HeroListComponent } from "./components/hero-list/hero-list.component";
import { HeroNewComponent } from "./components/hero-new/hero-new.component";
import { Hero } from './shared/interfaces/hero.interface';
import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'app-root',
  imports: [HeroListComponent, HeroNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-renaissance-fundamentals-workshop';
  readonly #heroService = inject(HeroService);

  heroes = this.#heroService.findAll();

  addHero(hero: Hero) {
    this.#heroService.add(hero);
  }

}
