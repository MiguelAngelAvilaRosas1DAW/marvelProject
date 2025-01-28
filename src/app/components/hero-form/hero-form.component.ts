import { TitleCasePipe } from '@angular/common';
import { Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Hero } from '../../shared/interfaces/hero.interface';
import { heroNameValidator } from '../../shared/validators/hero-name-validator';

@Component({
  selector: 'app-hero-form',
  imports: [ReactiveFormsModule, TitleCasePipe],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.scss'
})
export class HeroFormComponent {
  add = output<Hero>({ alias: 'sendHero' });
  readonly #formBuilder = inject(FormBuilder)
  message = "";

  heroForm: FormGroup = this.#formBuilder.group({
    name: ['Joker', Validators.required, heroNameValidator],
    image: ['https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/370-joker.jpg'],
    alignment: ['bad'],
    powerstats: this.#formBuilder.group({
      intelligence: [100, [Validators.required, Validators.min(0), Validators.max(100)]],
      strength: [10, [Validators.required, Validators.min(0), Validators.max(100)]],
      speed: [12, [Validators.required, Validators.min(0), Validators.max(100)]],
      durability: [60, [Validators.required, Validators.min(0), Validators.max(100)]],
      power: [43, [Validators.required, Validators.min(0), Validators.max(100)]],
      combat: [70, [Validators.required, Validators.min(0), Validators.max(100)]]
    })
  })

  powerstats = [
    'intelligence',
    'strength',
    'speed',
    'durability',
    'power',
    'combat'
  ];

  addHero() {
    if (this.heroForm.invalid) {
      this.message = "Please correct all errors and resubmit the form.";
    } else {
      const hero: Hero = {
        id: Math.floor(Math.random() * 1000) + 1,
        ...this.heroForm.value,
        powerstats: { ...this.heroForm.value.powerstats }
      }
      console.log('Creating Hero', hero);
      this.add.emit(hero);
    }
  }
}
