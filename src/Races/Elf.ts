import Race from './Race';

export default class Elf extends Race {
  protected _maxLifePoints: number;
  static _racesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._racesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static racesInstance(): number {
    return Elf._racesInstances;
  }
}