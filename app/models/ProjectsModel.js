import {BaseModel} from './BaseModel';
import {ProjectModel} from './ProjectModel';

/**
 * @property {ProjectModel[]} data
 */
export class ProjectsModel extends BaseModel {
  constructor(projects) {
    super(projects);

    this.data = [];
    for (const k in projects) {
      this.data[k] = new ProjectModel(projects[k]);
    }
  }
}
