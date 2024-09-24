import { Finance } from './finance.model';
export declare class FinanceBuilder {
    private uuid;
    private item;
    private value;
    private payment_type;
    private finance_type;
    private category;
    private payment_date;
    private notes?;
    private updatedAt?;
    withUuid(uuid: string): FinanceBuilder;
    withItem(item: string): FinanceBuilder;
    withValue(value: number): FinanceBuilder;
    withPaymentType(payment_type: string): FinanceBuilder;
    withFinanceType(finance_type: string): FinanceBuilder;
    withCategory(category: string): FinanceBuilder;
    withPaymentDate(payment_date: Date): FinanceBuilder;
    withNotes(notes: string): FinanceBuilder;
    withUpdatedAt(updatedAt: string): FinanceBuilder;
    build(): Finance;
}
