import { Appointment } from './appointment.model';

export class AppointmentBuilder {
  private appointment: Appointment;

  constructor() {
    this.appointment = new Appointment();
  }

  public withUuid(uuid: string): this {
    this.appointment.uuid = uuid;
    return this;
  }

  public withCreatedAt(createdAt: string): this {
    this.appointment.createdAt = createdAt;
    return this;
  }

  public withUpdatedAt(updatedAt: string): this {
    this.appointment.updatedAt = updatedAt;
    return this;
  }

  public withCustomerUuid(customer_uuid: string): this {
    this.appointment.customer_uuid = customer_uuid;
    return this;
  }

  public withType(type: string): this {
    this.appointment.type = type;
    return this;
  }

  public withDate(date: Date): this {
    this.appointment.date = date;
    return this;
  }

  public withHour(hour: string): this {
    this.appointment.hour = hour;
    return this;
  }

  public withStatus(status: string): this {
    this.appointment.status = status;
    return this;
  }

  public withPaymentStatus(payment_status: string): this {
    this.appointment.payment_status = payment_status;
    return this;
  }

  public build(): Appointment {
    return this.appointment;
  }
}
