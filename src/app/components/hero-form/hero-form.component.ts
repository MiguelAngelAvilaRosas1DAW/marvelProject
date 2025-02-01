import { TitleCasePipe } from '@angular/common';
import { Component, computed, inject, input, output, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';
import { HeroService } from '../../shared/services/hero.service';
import { heroNameValidator } from '../../shared/validators/hero-name-validator';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})
export class HeroFormComponent {
  readonly #heroService = inject(HeroService);
  add = output<Hero>({ alias: 'sendHero' });
  hero = input<Hero>(this.#heroService.defaultHero)
  readonly #formBuilder = inject(FormBuilder)
  message = "";
  textButton = computed(() =>
    this.#heroService.isDefaultHero(this.hero()) ? 'Create' : 'Update'
  );

  heroForm: Signal<FormGroup> = computed(() => this.#formBuilder.group({
    name: [this.hero().name, Validators.required, heroNameValidator],
    image: [this.hero().image],
    alignment: [this.hero().alignment],
    powerstats: this.#formBuilder.group({
      intelligence: [this.hero().powerstats.intelligence, [Validators.required, Validators.min(0), Validators.max(100)]],
      strength: [this.hero().powerstats.strength, [Validators.required, Validators.min(0), Validators.max(100)]],
      speed: [this.hero().powerstats.speed, [Validators.required, Validators.min(0), Validators.max(100)]],
      durability: [this.hero().powerstats.durability, [Validators.required, Validators.min(0), Validators.max(100)]],
      power: [this.hero().powerstats.power, [Validators.required, Validators.min(0), Validators.max(100)]],
      combat: [this.hero().powerstats.combat, [Validators.required, Validators.min(0), Validators.max(100)]]
    })
  })
);

  powerstats = [
    'intelligence',
    'strength',
    'speed',
    'durability',
    'power',
    'combat'
  ];

  addHero() {
    if (this.heroForm().invalid) {
      this.message = "Please correct all errors and resubmit the form.";
    } else {
      const hero: Hero = {
        id: this.hero().id,
        ...this.heroForm().value,
        powerstats: { ...this.heroForm().value.powerstats }
      }
      console.log('Creating Hero', hero);
      this.add.emit(hero);
    }
  }
}
