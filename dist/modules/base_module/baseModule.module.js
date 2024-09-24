"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModuleModule = void 0;
const common_1 = require("@nestjs/common");
const basemodule_controller_1 = require("../api/controllers/basemodule.controller");
const basemodule_provider_1 = require("../../providers/basemodule.provider");
let BaseModuleModule = class BaseModuleModule {
};
exports.BaseModuleModule = BaseModuleModule;
exports.BaseModuleModule = BaseModuleModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [basemodule_controller_1.BaseModuleController],
        providers: [
            {
                provide: 'BaseModuleProviderInterface',
                useClass: basemodule_provider_1.BaseModuleProvider,
            },
        ],
    })
], BaseModuleModule);
//# sourceMappingURL=baseModule.module.js.map