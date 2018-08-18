import BaseModel from './BaseModel';

export class StackModel extends BaseModel {
  constructor(stack) {
      super();

      this.id = stack.id;
      this.project_id = stack.project_id;
      this.tech_id = stack.tech_id;
      this.created_at = stack.created_at;
      this.updated_at = stack.updated_at;
  }
}
