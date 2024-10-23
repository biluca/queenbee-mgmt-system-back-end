import { GenericModel } from "../../../common/model/genericModel.model";

export class Appointment extends GenericModel {
  uuid: string;
  createdAt: string;
  updatedAt: string;
  customer_uuid: string;
  type: string;
  date: Date;
  hour: string;
  status: string;
  payment_status: string;
}
