import { v4 as uuid } from 'uuid';

export class GenericModel {
  uuid: string;
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.uuid = uuid();
    this.createdAt = new Date().toISOString();
  }
}
