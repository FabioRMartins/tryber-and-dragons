import Race from './Race';

export default class Dwarf extends Race {
  protected _maxLifePoints: number;
  static _racesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._racesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static racesInstance(): number {
    return Dwarf._racesInstances;
  }
}
