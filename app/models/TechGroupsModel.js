import {BaseModel} from './BaseModel';
import {TechGroupModel} from './TechGroupModel';

/**
 * @property {TechGroupModel} data
 */
export class TechGroupsModel extends BaseModel {
  constructor(techGroups) {
    super();

    this.data = [];
    for (const k in techGroups) {
      this.data[k] = new TechGroupModel(techGroups[k]);
    }

  }
}
