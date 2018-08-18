export class BaseModel {
  constructor(object) {
  }

  toBaseObject() {
    const names = Object.getOwnPropertyNames(this);
    let object = {};
    for (const k in names) {
      const name = names[k];
      // skip functions
      if (typeof name === 'function') {
        continue;
      }

      object[k] = this[name];
    }

    return object;
  }
}
