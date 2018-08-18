import {BaseModel} from './BaseModel';
import {TechStackModel} from './TechStackModel';

/**
 *
 */
export class TechStacksModel extends BaseModel {
  constructor(techStacks) {
    super();

    this.data = [];
    for (const k in techStacks) {
      this.data[k] = new TechStackModel(techStacks[k]);
    }
  }
}
