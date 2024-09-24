"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentProvider = void 0;
const common_1 = require("@nestjs/common");
const genericProvider_commons_1 = require("../common/genericProvider.commons");
let AppointmentProvider = class AppointmentProvider extends genericProvider_commons_1.GenericProvider {
    create(object) {
        throw new Error('Method not implemented.');
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    getByFilters(filters) {
        throw new Error('Method not implemented.');
    }
    getBySearch(search) {
        throw new Error('Method not implemented.');
    }
    getById(uuid) {
        throw new Error('Method not implemented.');
    }
    updateById(object) {
        throw new Error('Method not implemented.');
    }
    deleteById(uuid) {
        throw new Error('Method not implemented.');
    }
};
exports.AppointmentProvider = AppointmentProvider;
exports.AppointmentProvider = AppointmentProvider = __decorate([
    (0, common_1.Injectable)()
], AppointmentProvider);
//# sourceMappingURL=appointment.provider.js.map