import { Finance } from './finance.model';

export class FinanceBuilder {
  private uuid: string;
  private item: string;
  private value: number;
  private payment_type: string;
  private finance_type: string;
  private category: string;
  private payment_date: Date;
  private notes?: string;
  private updatedAt?: string;

  public withUuid(uuid: string): FinanceBuilder {
    this.uuid = uuid;
    return this;
  }

  withItem(item: string): FinanceBuilder {
    this.item = item;
    return this;
  }

  withValue(value: number): FinanceBuilder {
    this.value = value;
    return this;
  }

  withPaymentType(payment_type: string): FinanceBuilder {
    this.payment_type = payment_type;
    return this;
  }

  withFinanceType(finance_type: string): FinanceBuilder {
    this.finance_type = finance_type;
    return this;
  }

  withCategory(category: string): FinanceBuilder {
    this.category = category;
    return this;
  }

  withPaymentDate(payment_date: Date): FinanceBuilder {
    this.payment_date = payment_date;
    return this;
  }

  withNotes(notes: string): FinanceBuilder {
    this.notes = notes;
    return this;
  }

  public withUpdatedAt(updatedAt: string): FinanceBuilder {
    this.updatedAt = updatedAt;
    return this;
  }

  build(): Finance {
    const finance = new Finance();
    if (this.uuid !== undefined) finance.uuid = this.uuid;
    if (this.item !== undefined) finance.item = this.item;
    if (this.value !== undefined) finance.value = this.value;
    if (this.payment_type !== undefined)
      finance.payment_type = this.payment_type;
    if (this.finance_type !== undefined)
      finance.finance_type = this.finance_type;
    if (this.category !== undefined) finance.category = this.category;
    if (this.payment_date !== undefined)
      finance.payment_date = this.payment_date;
    if (this.notes !== undefined) finance.notes = this.notes;
    if (this.updatedAt !== undefined) finance.updatedAt = this.updatedAt;

    return finance;
  }
}
