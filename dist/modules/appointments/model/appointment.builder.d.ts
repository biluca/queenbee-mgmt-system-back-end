import { Appointment } from './appointment.model';
export declare class AppointmentBuilder {
    private appointment;
    constructor();
    withUuid(uuid: string): this;
    withCreatedAt(createdAt: string): this;
    withUpdatedAt(updatedAt: string): this;
    withCustomerUuid(customer_uuid: string): this;
    withType(type: string): this;
    withDate(date: Date): this;
    withHour(hour: string): this;
    withStatus(status: string): this;
    withPaymentStatus(payment_status: string): this;
    build(): Appointment;
}
