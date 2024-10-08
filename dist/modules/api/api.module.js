"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./controllers/app.controller");
const customers_module_1 = require("../customers/customers.module");
const auth_module_1 = require("../auth/auth.module");
const baseModule_module_1 = require("../finance/baseModule.module");
const appointment_module_1 = require("../appointments/appointment.module");
let ApiModule = class ApiModule {
};
exports.ApiModule = ApiModule;
exports.ApiModule = ApiModule = __decorate([
    (0, common_1.Module)({
        imports: [customers_module_1.CustomersModule, auth_module_1.AuthModule, baseModule_module_1.FinanceModule, appointment_module_1.AppointmentModule],
        controllers: [app_controller_1.AppController],
        providers: [],
    })
], ApiModule);
//# sourceMappingURL=api.module.js.map