import { GenericModel } from 'src/common/model/genericModel.model';
export declare class Appointment extends GenericModel {
    customer_uuid: string;
    type: string;
    date: Date;
    hour: string;
    status: string;
    payment_status: string;
}
