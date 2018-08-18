import {BaseModel} from './BaseModel';
import {StackModel} from './StackModel';

export class ProjectModel extends BaseModel {
  constructor(project) {
    super(project);

    this.id = project.id;
    this.name_ru = project.name_ru;
    this.gist_ru = project.gist_ru;
    this.description_ru = project.description_ru;
    this.name_en = project.name_en;
    this.gist_en = project.gist_en;
    this.description_en = project.description_en;
    this.image_url = project.image_url;
    this.date_start = project.date_start;
    this.date_end = project.date_end;
    this.link = project.link;
    this.created_at = project.created_at;
    this.updated_at = project.updated_at;

    this.stack = new StackModel(project.stack);
  }
}
