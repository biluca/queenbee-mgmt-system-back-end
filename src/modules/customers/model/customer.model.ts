import { GenericModel } from 'src/common/model/genericModel.model';

export class Customer extends GenericModel {
  constructor() {
    super();
  }

  //Mandatory
  name: string;

  //Optional
  email?: string;
  phoneNumber?: string;
  instagram?: string;
}
