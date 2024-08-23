"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersProvider = void 0;
const common_1 = require("@nestjs/common");
const genericProvider_commons_1 = require("../common/genericProvider.commons");
let CustomersProvider = class CustomersProvider extends genericProvider_commons_1.GenericProvider {
    constructor() {
        super(...arguments);
        this.todayBirthdays = [
            {
                name: 'Vinicios Lorencena Biluca',
                age: 24,
                gender: 'Male',
                profile_photo: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
            {
                name: 'Jane Doe',
                age: 24,
                gender: 'Female',
                profile_photo: 'https://randomuser.me/api/portraits/women/4.jpg',
            },
            {
                name: 'Elizabeth Dutton',
                age: 34,
                gender: 'Female',
                profile_photo: 'https://randomuser.me/api/portraits/women/68.jpg',
            },
            {
                name: 'Emma Wheller',
                age: 27,
                gender: 'Female',
                profile_photo: 'https://randomuser.me/api/portraits/women/3.jpg',
            },
            {
                name: 'Elsa Dutton',
                age: 21,
                gender: 'Female',
                profile_photo: 'https://randomuser.me/api/portraits/women/69.jpg',
            },
            {
                name: 'Margaret Roberts',
                age: 30,
                gender: 'Female',
                profile_photo: 'https://randomuser.me/api/portraits/women/6.jpg',
            },
        ];
    }
    async getTodayBirthdays() {
        return Promise.resolve(this.todayBirthdays);
    }
};
exports.CustomersProvider = CustomersProvider;
exports.CustomersProvider = CustomersProvider = __decorate([
    (0, common_1.Injectable)()
], CustomersProvider);
//# sourceMappingURL=customers.provider.js.map