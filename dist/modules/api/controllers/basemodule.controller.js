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
exports.BaseModuleController = void 0;
const common_1 = require("@nestjs/common");
const genericController_commons_1 = require("../../../common/genericController.commons");
const basemodule_processor_1 = require("../../base_module/processor/basemodule.processor");
let BaseModuleController = class BaseModuleController extends genericController_commons_1.GenericController {
    constructor(baseModuleProvider) {
        super();
        this.baseModuleProvider = baseModuleProvider;
        this.baseModuleProcessor = new basemodule_processor_1.BaseModuleProcessor(this.baseModuleProvider);
    }
    get(req, res) {
        const result = this.baseModuleProcessor.getSampleFunction();
        return this.resolveResponse(req, res, result);
    }
};
exports.BaseModuleController = BaseModuleController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], BaseModuleController.prototype, "get", null);
exports.BaseModuleController = BaseModuleController = __decorate([
    (0, common_1.Controller)('basemodule'),
    __param(0, (0, common_1.Inject)('BaseModuleProviderInterface')),
    __metadata("design:paramtypes", [Object])
], BaseModuleController);
//# sourceMappingURL=basemodule.controller.js.map