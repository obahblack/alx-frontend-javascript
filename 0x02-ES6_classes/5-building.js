export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find((name) => typeof superProto[name] === 'function' && !Object.prototype.hasOwnProperty.call(proto, name));

    if (missing) throw new Error('Class extending Building must override evacuationWarningMessage');
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  evacuationWarningMessage() {
    return `evacuationWarningMessage ${this._sqft}`;
  }
}
