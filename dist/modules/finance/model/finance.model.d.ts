import { GenericModel } from 'src/common/model/genericModel.model';
export declare class Finance extends GenericModel {
    constructor();
    item: string;
    value: number;
    payment_type: string;
    finance_type: string;
    category: string;
    payment_date: Date;
    notes: string;
}
