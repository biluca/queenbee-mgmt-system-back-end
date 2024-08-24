"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerBuilder = void 0;
const customer_model_1 = require("./customer.model");
class CustomerBuilder {
    constructor(name) {
        this.name = name;
    }
    withUuid(uuid) {
        this.uuid = uuid;
        return this;
    }
    withEmail(email) {
        this.email = email;
        return this;
    }
    withPhoneNumber(phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    withInstagram(instagram) {
        this.instagram = instagram;
        return this;
    }
    withUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    build() {
        const customer = new customer_model_1.Customer();
        customer.name = this.name;
        if (this.uuid !== undefined)
            customer.uuid = this.uuid;
        if (this.email !== undefined)
            customer.email = this.email;
        if (this.phoneNumber !== undefined)
            customer.phoneNumber = this.phoneNumber;
        if (this.instagram !== undefined)
            customer.instagram = this.instagram;
        if (this.updatedAt !== undefined)
            customer.updatedAt = this.updatedAt;
        return customer;
    }
}
exports.CustomerBuilder = CustomerBuilder;
//# sourceMappingURL=customer.builder.js.map