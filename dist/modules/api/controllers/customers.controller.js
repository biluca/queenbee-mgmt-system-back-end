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
let CustomersController = class CustomersController extends genericController_commons_1.GenericController {
    constructor(customersProvider) {
        super();
        this.customersProvider = customersProvider;
        this.customersProcessor = new customers_processor_1.CustomersProcessor(this.customersProvider);
    }
    get(req, res) {
        const result = this.customersProcessor.process();
        return this.resolveResponse(req, res, result);
    }
};
exports.CustomersController = CustomersController;
__decorate([
    (0, common_1.Get)('/birthdays'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], CustomersController.prototype, "get", null);
exports.CustomersController = CustomersController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('CustomersProviderInterface')),
    __metadata("design:paramtypes", [Object])
], CustomersController);
//# sourceMappingURL=customers.controller.js.map