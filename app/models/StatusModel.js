import {BaseModel} from './BaseModel';

export class StatusModel extends BaseModel {
  constructor(status) {
    super(status);

    this.success = status.success == true;
    this.errors = status.errors;
  }
}
