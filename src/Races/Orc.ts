import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints: number;
  static _racesInstances = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._racesInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._racesInstances;
  }
}
