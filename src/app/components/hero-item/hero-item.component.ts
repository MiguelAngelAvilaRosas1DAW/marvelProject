import { CommonModule } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroPowerStatsChange } from '../../shared/interfaces/hero-powerstats-change-interface';
import { Hero, PowerStat } from '../../shared/interfaces/hero.interface';

@Component({
  selector: 'app-hero-item',
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-item.component.html'
})
export class HeroItemComponent {
  hero = input.required<Hero>();
  powerstatsChange = output<HeroPowerStatsChange>();

  isHeroVillain = computed(() => this.hero().alignment === 'bad');

  decrementPowerStats(powerstat: PowerStat): void {
    this.powerstatsChange.emit({hero: this.hero(), powerstat, value: -1})
  }

  incrementPowerStats(powerstat: PowerStat): void {
    this.powerstatsChange.emit({hero: this.hero(), powerstat, value: 1})
  }

}
