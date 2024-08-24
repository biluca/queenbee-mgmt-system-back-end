import { Customer } from './customer.model';
export declare class CustomerBuilder {
    private uuid;
    private name;
    private email?;
    private phoneNumber?;
    private instagram?;
    private updatedAt?;
    constructor(name: string);
    withUuid(uuid: string): CustomerBuilder;
    withEmail(email: string): CustomerBuilder;
    withPhoneNumber(phoneNumber: string): CustomerBuilder;
    withInstagram(instagram: string): CustomerBuilder;
    withUpdatedAt(updatedAt: string): CustomerBuilder;
    build(): Customer;
}
