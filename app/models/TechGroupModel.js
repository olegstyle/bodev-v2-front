import {BaseModel} from './BaseModel';

export class TechGroupModel extends BaseModel {
  constructor(techGroup) {
    super();

    this.id = techGroup.id;
    this.name = techGroup.name;
    this.order = techGroup.order || 0;
    this.created_at = techGroup.created_at || Date.now().toLocaleString();
    this.updated_at = techGroup.updated_at || Date.now().toLocaleString();
  }
}
