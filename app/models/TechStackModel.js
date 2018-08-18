import {BaseModel} from './BaseModel';

export class TechStackModel extends BaseModel {
  constructor(techStack) {
    super();

    this.id = techStack.id;
    this.name = techStack.name;
    this.image_url = techStack.image_url;
    this.level = techStack.level;
    this.date_start = techStack.date_start;
    this.created_at = techStack.created_at;
    this.updated_at = techStack.updated_at;
    this.group_id = techStack.group_id;
  }
}
