"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentBuilder = void 0;
const appointment_model_1 = require("./appointment.model");
class AppointmentBuilder {
    constructor() {
        this.appointment = new appointment_model_1.Appointment();
    }
    withUuid(uuid) {
        this.appointment.uuid = uuid;
        return this;
    }
    withCreatedAt(createdAt) {
        this.appointment.createdAt = createdAt;
        return this;
    }
    withUpdatedAt(updatedAt) {
        this.appointment.updatedAt = updatedAt;
        return this;
    }
    withCustomerUuid(customer_uuid) {
        this.appointment.customer_uuid = customer_uuid;
        return this;
    }
    withType(type) {
        this.appointment.type = type;
        return this;
    }
    withDate(date) {
        this.appointment.date = date;
        return this;
    }
    withHour(hour) {
        this.appointment.hour = hour;
        return this;
    }
    withStatus(status) {
        this.appointment.status = status;
        return this;
    }
    withPaymentStatus(payment_status) {
        this.appointment.payment_status = payment_status;
        return this;
    }
    build() {
        return this.appointment;
    }
}
exports.AppointmentBuilder = AppointmentBuilder;
//# sourceMappingURL=appointment.builder.js.map