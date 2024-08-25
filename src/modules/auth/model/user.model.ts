import { GenericModel } from 'src/common/model/genericModel.model';

export class User extends GenericModel {
  constructor() {
    super();
  }

  name: string;
  username: string;
  password: string;
}
