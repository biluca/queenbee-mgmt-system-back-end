"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentProcessor = void 0;
const common_1 = require("@nestjs/common");
const genericProcessor_commons_1 = require("../../../common/genericProcessor.commons");
let AppointmentProcessor = class AppointmentProcessor extends genericProcessor_commons_1.GenericProcessor {
    constructor(appointmentProvider) {
        super();
        this.appointmentProvider = appointmentProvider;
    }
    create(appointment) {
        return this.appointmentProvider.create(appointment);
    }
    getAll() {
        return this.appointmentProvider.getAll();
    }
    getById(uuid) {
        return this.appointmentProvider.getById(uuid);
    }
    getByFilters(filters) {
        return this.appointmentProvider.getByFilters(filters);
    }
    getBySearch(search) {
        return this.appointmentProvider.getBySearch(search);
    }
    updateById(appointment) {
        return this.appointmentProvider.updateById(appointment);
    }
    deleteById(uuid) {
        return this.appointmentProvider.deleteById(uuid);
    }
};
exports.AppointmentProcessor = AppointmentProcessor;
exports.AppointmentProcessor = AppointmentProcessor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], AppointmentProcessor);
//# sourceMappingURL=appointment.processor.js.map