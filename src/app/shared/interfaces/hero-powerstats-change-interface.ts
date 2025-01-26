import { Hero, PowerStat } from "./hero.interface";

export interface HeroPowerStatsChange {
    hero: Hero;
    powerstat: PowerStat;
    value: number;
}