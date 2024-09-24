import { GenericModel } from 'src/common/model/genericModel.model';

export class Finance extends GenericModel {
  constructor() {
    super();
  }

  //Mandatory
  item: string;
  value: number;
  payment_type: string;
  finance_type: string;
  category: string;
  payment_date: Date;

  //Optional
  notes: string;
}
