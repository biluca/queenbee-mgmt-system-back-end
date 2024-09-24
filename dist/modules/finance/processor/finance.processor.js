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
exports.FinanceProcessor = void 0;
const common_1 = require("@nestjs/common");
const genericProcessor_commons_1 = require("../../../common/genericProcessor.commons");
let FinanceProcessor = class FinanceProcessor extends genericProcessor_commons_1.GenericProcessor {
    constructor(financeProvider) {
        super();
        this.financeProvider = financeProvider;
    }
    create(object) {
        return this.financeProvider.create(object);
    }
    getAll() {
        return this.financeProvider.getAll();
    }
    getById(uuid) {
        return this.financeProvider.getById(uuid);
    }
    getByFilters(filters) {
        return this.financeProvider.getByFilters(filters);
    }
    getBySearch(search) {
        return this.financeProvider.getBySearch(search);
    }
    updateById(object) {
        return this.financeProvider.updateById(object);
    }
    deleteById(uuid) {
        return this.financeProvider.deleteById(uuid);
    }
};
exports.FinanceProcessor = FinanceProcessor;
exports.FinanceProcessor = FinanceProcessor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], FinanceProcessor);
//# sourceMappingURL=finance.processor.js.map