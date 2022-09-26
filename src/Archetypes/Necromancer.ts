import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static _archetypeInstances = 0;
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._archetypeInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }
}
