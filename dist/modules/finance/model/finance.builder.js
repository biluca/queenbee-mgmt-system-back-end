"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceBuilder = void 0;
const finance_model_1 = require("./finance.model");
class FinanceBuilder {
    withUuid(uuid) {
        this.uuid = uuid;
        return this;
    }
    withItem(item) {
        this.item = item;
        return this;
    }
    withValue(value) {
        this.value = value;
        return this;
    }
    withPaymentType(payment_type) {
        this.payment_type = payment_type;
        return this;
    }
    withFinanceType(finance_type) {
        this.finance_type = finance_type;
        return this;
    }
    withCategory(category) {
        this.category = category;
        return this;
    }
    withPaymentDate(payment_date) {
        this.payment_date = payment_date;
        return this;
    }
    withNotes(notes) {
        this.notes = notes;
        return this;
    }
    withUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    build() {
        const finance = new finance_model_1.Finance();
        if (this.uuid !== undefined)
            finance.uuid = this.uuid;
        if (this.item !== undefined)
            finance.item = this.item;
        if (this.value !== undefined)
            finance.value = this.value;
        if (this.payment_type !== undefined)
            finance.payment_type = this.payment_type;
        if (this.finance_type !== undefined)
            finance.finance_type = this.finance_type;
        if (this.category !== undefined)
            finance.category = this.category;
        if (this.payment_date !== undefined)
            finance.payment_date = this.payment_date;
        if (this.notes !== undefined)
            finance.notes = this.notes;
        if (this.updatedAt !== undefined)
            finance.updatedAt = this.updatedAt;
        return finance;
    }
}
exports.FinanceBuilder = FinanceBuilder;
//# sourceMappingURL=finance.builder.js.map