export class AppointmentUpdateDTO {
  uuid: string;
  customer_uuid: string;
  type: string;
  date: Date;
  hour: string;
  status: string;
  payment_status: string;
}
