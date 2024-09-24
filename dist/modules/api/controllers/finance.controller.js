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
exports.FinanceController = void 0;
const common_1 = require("@nestjs/common");
const genericController_commons_1 = require("../../../common/genericController.commons");
const finance_builder_1 = require("../../finance/model/finance.builder");
const finance_processor_1 = require("../../finance/processor/finance.processor");
const finance_dto_1 = require("../dto/finance.dto");
const financeUpdate_dto_1 = require("../dto/financeUpdate.dto");
let FinanceController = class FinanceController extends genericController_commons_1.GenericController {
    constructor(financeProvider) {
        super();
        this.financeProvider = financeProvider;
        this.financeProcessor = new finance_processor_1.FinanceProcessor(this.financeProvider);
    }
    create(financeDTO, req, res) {
        const finance = new finance_builder_1.FinanceBuilder()
            .withItem(financeDTO.item)
            .withValue(financeDTO.value)
            .withPaymentType(financeDTO.payment_type)
            .withFinanceType(financeDTO.finance_type)
            .withCategory(financeDTO.category)
            .withPaymentDate(financeDTO.payment_date)
            .withNotes(financeDTO.notes)
            .build();
        const result = this.financeProcessor.create(finance);
        return this.resolveResponse(req, res, result);
    }
    getAll(req, res) {
        const result = this.financeProcessor.getAll();
        return this.resolveResponse(req, res, result);
    }
    getById(uuid, req, res) {
        const result = this.financeProcessor.getById(uuid);
        return this.resolveResponse(req, res, result);
    }
    getByFilters(filters, req, res) {
        const result = this.financeProcessor.getByFilters(filters);
        return this.resolveResponse(req, res, result);
    }
    getBySearch(search, req, res) {
        const result = this.financeProcessor.getBySearch(search);
        return this.resolveResponse(req, res, result);
    }
    updateById(financeUpdateDTO, req, res) {
        const finance = new finance_builder_1.FinanceBuilder()
            .withUuid(financeUpdateDTO.uuid)
            .withItem(financeUpdateDTO.item)
            .withValue(financeUpdateDTO.value)
            .withPaymentType(financeUpdateDTO.payment_type)
            .withFinanceType(financeUpdateDTO.finance_type)
            .withCategory(financeUpdateDTO.category)
            .withPaymentDate(financeUpdateDTO.payment_date)
            .withNotes(financeUpdateDTO.notes)
            .build();
        const result = this.financeProcessor.updateById(finance);
        return this.resolveResponse(req, res, result);
    }
    deleteById(uuid, req, res) {
        const result = this.financeProcessor.deleteById(uuid);
        return this.resolveResponse(req, res, result);
    }
};
exports.FinanceController = FinanceController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [finance_dto_1.FinanceDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)('/filter'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getByFilters", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "getBySearch", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [financeUpdate_dto_1.FinanceUpdateDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], FinanceController.prototype, "deleteById", null);
exports.FinanceController = FinanceController = __decorate([
    (0, common_1.Controller)('finance'),
    __param(0, (0, common_1.Inject)('FinanceProviderInterface')),
    __metadata("design:paramtypes", [Object])
], FinanceController);
//# sourceMappingURL=finance.controller.js.map