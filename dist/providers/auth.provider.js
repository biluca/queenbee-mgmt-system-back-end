"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = void 0;
const common_1 = require("@nestjs/common");
const genericProvider_commons_1 = require("../common/genericProvider.commons");
const auth_service_1 = require("../services/auth.service");
let AuthProvider = class AuthProvider extends genericProvider_commons_1.GenericProvider {
    constructor() {
        super(...arguments);
        this.authService = new auth_service_1.AuthService();
    }
    getToken(user) {
        return this.authService.getToken(user);
    }
};
exports.AuthProvider = AuthProvider;
exports.AuthProvider = AuthProvider = __decorate([
    (0, common_1.Injectable)()
], AuthProvider);
//# sourceMappingURL=auth.provider.js.map