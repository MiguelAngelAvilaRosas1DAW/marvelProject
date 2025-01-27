import { Component, inject } from '@angular/core';
import { HeroListComponent } from "./components/hero-list/hero-list.component";
import { HeroNewComponent } from "./components/hero-new/hero-new.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { Hero } from './shared/interfaces/hero.interface';
import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'app-root',
  imports: [HeroListComponent, HeroNewComponent, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-renaissance-fundamentals-workshop';
  readonly #heroService = inject(HeroService);

  heroes = this.#heroService.findAll();

  addHero(hero: Hero) {
    this.#heroService.add(hero);
  }

}
