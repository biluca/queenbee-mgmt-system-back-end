export class FinanceUpdateDTO {
  //Mandatory
  uuid: string;
  item: string;
  value: number;
  payment_type: string;
  finance_type: string;
  category: string;
  payment_date: Date;

  //Optional
  notes: string;
}
