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
exports.CustomersController = void 0;
const common_1 = require("@nestjs/common");
const genericController_commons_1 = require("../../../common/genericController.commons");
const customers_processor_1 = require("../../customers/processor/customers.processor");
const customer_dto_1 = require("../dto/customer.dto");
const customer_builder_1 = require("../../customers/model/customer.builder");
const customerUpdate_dto_1 = require("../dto/customerUpdate.dto");
let CustomersController = class CustomersController extends genericController_commons_1.GenericController {
    constructor(customersProvider) {
        super();
        this.customersProvider = customersProvider;
        this.customersProcessor = new customers_processor_1.CustomersProcessor(this.customersProvider);
    }
    create(customerDTO, req, res) {
        const customer = new customer_builder_1.CustomerBuilder(customerDTO.name)
            .withEmail(customerDTO.email)
            .withInstagram(customerDTO.instagram)
            .withPhoneNumber(customerDTO.phoneNumber)
            .build();
        const result = this.customersProcessor.create(customer);
        return this.resolveResponse(req, res, result);
    }
    getAll(req, res) {
        const result = this.customersProcessor.getAll();
        return this.resolveResponse(req, res, result);
    }
    getByFilters(filters, req, res) {
        const result = this.customersProcessor.getByFilters(filters);
        return this.resolveResponse(req, res, result);
    }
    getBySearch(search, req, res) {
        const result = this.customersProcessor.getBySearch(search);
        return this.resolveResponse(req, res, result);
    }
    getById(uuid, req, res) {
        const result = this.customersProcessor.getById(uuid);
        return this.resolveResponse(req, res, result);
    }
    updateById(customerUpdateDTO, req, res) {
        const customer = new customer_builder_1.CustomerBuilder(customerUpdateDTO.name)
            .withUuid(customerUpdateDTO.uuid)
            .withEmail(customerUpdateDTO.email)
            .withInstagram(customerUpdateDTO.instagram)
            .withPhoneNumber(customerUpdateDTO.phoneNumber)
            .build();
        const result = this.customersProcessor.updateById(customer);
        return this.resolveResponse(req, res, result);
    }
    deleteById(uuid, req, res) {
        const result = this.customersProcessor.deleteById(uuid);
        return this.resolveResponse(req, res, result);
    }
};
exports.CustomersController = CustomersController;
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_dto_1.CustomerDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/filter'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getByFilters", null);
__decorate([
    (0, common_1.Get)('/search'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getBySearch", null);
__decorate([
    (0, common_1.Get)(':uuid'),
    __param(0, (0, common_1.Param)('uuid')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customerUpdate_dto_1.CustomerUpdateDTO, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "updateById", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CustomersController.prototype, "deleteById", null);
exports.CustomersController = CustomersController = __decorate([
    (0, common_1.Controller)('customer'),
    __param(0, (0, common_1.Inject)('CustomersProviderInterface')),
    __metadata("design:paramtypes", [Object])
], CustomersController);
//# sourceMappingURL=customers.controller.js.map