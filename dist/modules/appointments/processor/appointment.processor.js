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
    create(object) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    getById(uuid) {
        throw new Error('Method not implemented.');
    }
    getByFilters(filters) {
        throw new Error('Method not implemented.');
    }
    getBySearch(search) {
        throw new Error('Method not implemented.');
    }
    updateById(object) {
        throw new Error('Method not implemented.');
    }
    deleteById(uuid) {
        throw new Error('Method not implemented.');
    }
};
exports.AppointmentProcessor = AppointmentProcessor;
exports.AppointmentProcessor = AppointmentProcessor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], AppointmentProcessor);
//# sourceMappingURL=appointment.processor.js.map