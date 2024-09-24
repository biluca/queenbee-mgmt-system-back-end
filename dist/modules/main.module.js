"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainModule = void 0;
const common_1 = require("@nestjs/common");
const api_module_1 = require("./api/api.module");
const config_1 = require("@nestjs/config");
const authorizator_middleware_1 = require("../middleware/authorizator.middleware");
let MainModule = class MainModule {
    configure(consumer) {
        consumer
            .apply(authorizator_middleware_1.AuthorizatorMiddleware)
            .exclude({ path: '/auth/login', method: common_1.RequestMethod.ALL }, { path: '/auth/user', method: common_1.RequestMethod.ALL })
            .forRoutes({
            path: '*',
            method: common_1.RequestMethod.ALL,
        });
    }
};
exports.MainModule = MainModule;
exports.MainModule = MainModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule.forRoot(), api_module_1.ApiModule],
        controllers: [],
        providers: [],
    })
], MainModule);
//# sourceMappingURL=main.module.js.map