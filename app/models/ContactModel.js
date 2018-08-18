import {BaseModel} from './BaseModel';

export class ContactModel extends BaseModel {
  constructor(contact) {
    super(contact);

    this.name = contact.name;
    this.email = contact.email;
    this.message = contact.message;
    this.captcha = contact.captcha;
  }
}
