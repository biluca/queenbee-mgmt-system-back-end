import { Customer } from './customer.model';

export class CustomerBuilder {
  private uuid: string;
  private name: string;
  private email?: string;
  private phoneNumber?: string;
  private instagram?: string;
  private updatedAt?: string;

  constructor(name: string) {
    this.name = name;
  }

  public withUuid(uuid: string): CustomerBuilder {
    this.uuid = uuid;
    return this;
  }

  public withEmail(email: string): CustomerBuilder {
    this.email = email;
    return this;
  }

  public withPhoneNumber(phoneNumber: string): CustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  public withInstagram(instagram: string): CustomerBuilder {
    this.instagram = instagram;
    return this;
  }

  public withUpdatedAt(updatedAt: string): CustomerBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  public build(): Customer {
    const customer = new Customer();
    customer.name = this.name;
    if (this.uuid !== undefined) customer.uuid = this.uuid;
    if (this.email !== undefined) customer.email = this.email;
    if (this.phoneNumber !== undefined) customer.phoneNumber = this.phoneNumber;
    if (this.instagram !== undefined) customer.instagram = this.instagram;
    if (this.updatedAt !== undefined) customer.updatedAt = this.updatedAt;

    return customer;
  }
}
