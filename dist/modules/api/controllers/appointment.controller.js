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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentController = void 0;
const common_1 = require("@nestjs/common");
const genericController_commons_1 = require("../../../common/genericController.commons");
const appointment_processor_1 = require("../../appointments/processor/appointment.processor");
const appointment_dto_1 = require("../dto/appointment.dto");
const appointment_builder_1 = require("../../appointments/model/appointment.builder");
const appointmentUpdate_dto_1 = require("../dto/appointmentUpdate.dto");
let AppointmentController = class AppointmentController extends genericController_commons_1.GenericController {
    constructor(appointmentProvider) {
        super();
        this.appointmentProvider = appointmentProvider;
        this.appointmentProcessor = new appointment_processor_1.AppointmentProcessor(this.appointmentProvider);
    }
    create(appoitmentDTO, req, res) {
        const appointment = new appointment_builder_1.AppointmentBuilder()
            .withCustomerUuid(appoitmentDTO.customer_uuid)
            .withType(appoitmentDTO.type)
            .withDate(appoitmentDTO.date)
            .withHour(appoitmentDTO.hour)
            .withStatus(appoitmentDTO.status)
            .withPaymentStatus(appoitmentDTO.payment_status)
            .build();
        const result = this.appointmentProcessor.create(appointment);
        return this.resolveResponse(req, res, result);
    }
    getAll(req, res) {
        const result = this.appointmentProcessor.getAll();
        return this.resolveResponse(req, res, result);
    }
    getById(uuid, req, res) {
        const result = this.appointmentProcessor.getById(uuid);
        return this.resolveResponse(req, res, result);
    }
    getByFilters(filters, req, res) {
        const result = this.appointmentProcessor.getByFilters(filters);
        return this.resolveResponse(req, res, result);
    }
    getBySearch(search, req, res) {
        const result = this.appointmentProcessor.getBySearch(search);
        return this.resolveResponse(req, res, result);
    }
    updateById(appoitmentUpdateDTO, req, res) {
        const appointment = new appointment_builder_1.AppointmentBuilder()
            .withUuid(appoitmentUpdateDTO.uuid)
            .withCustomerUuid(appoitmentUpdateDTO.customer_uuid)
            .withType(appoitmentUpdateDTO.type)
            .withDate(appoitmentUpdateDTO.date)
            .withHour(appoitmentUpdateDTO.hour)
            .withStatus(appoitmentUpdateDTO.status)
            .withPaymentStatus(appoitmentUpdateDTO.payment_status)
            .build();
        const result = this.appointmentProcessor.updateById(appointment);
        return this.resolveResponse(req, res, result);
    }
    deleteById(uuid, req, res) {
        const result = this.appointmentProcessor.deleteById(uuid);
        return this.resolveResponse(req, res, result);
    }
};
exports.AppointmentController = AppointmentController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointment_dto_1.AppointmentDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('filter'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getByFilters", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "getBySearch", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [appointmentUpdate_dto_1.AppointmentUpdateDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AppointmentController.prototype, "deleteById", null);
exports.AppointmentController = AppointmentController = __decorate([
    (0, common_1.Controller)('appointment'),
    __param(0, (0, common_1.Inject)('AppointmentProviderInterface')),
    __metadata("design:paramtypes", [Object])
], AppointmentController);
//# sourceMappingURL=appointment.controller.js.map