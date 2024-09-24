export class FinanceDTO {
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
