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
const queryBuilder_common_1 = require("../common/database/queryBuilder.common");
const genericProvider_commons_1 = require("../common/genericProvider.commons");
const postgres_service_1 = require("../services/postgres.service");
let CustomersProvider = class CustomersProvider extends genericProvider_commons_1.GenericProvider {
    constructor() {
        super(...arguments);
        this.postgresService = new postgres_service_1.PostgresService();
        this.queryBuilder = new queryBuilder_common_1.QueryBuilder();
        this.tableName = 'customers';
    }
    create(customer) {
        const insertQuery = this.queryBuilder.buildInsert(this.tableName, customer);
        this.logger.info(insertQuery);
        return this.postgresService.runSQL(this.tableName, insertQuery);
    }
    getAll() {
        const simpleSelectQuery = this.queryBuilder.buildSimpleSelect(this.tableName);
        return this.postgresService.runSQL(this.tableName, simpleSelectQuery);
    }
    getById(uuid) {
        const filters = {
            id: uuid,
        };
        const filteredSelectQuery = this.queryBuilder.buildFilteredSelect(this.tableName, filters);
        return this.postgresService.runSQL(this.tableName, filteredSelectQuery);
    }
    getByFilters(filters) {
        const filteredSelectQuery = this.queryBuilder.buildFilteredSelect(this.tableName, filters);
        this.logger.info(filteredSelectQuery);
        return this.postgresService.runSQL(this.tableName, filteredSelectQuery);
    }
    getBySearch(search) {
        const searchSelectQuery = this.queryBuilder.buildSearchSelect(this.tableName, search);
        return this.postgresService.runSQL(this.tableName, searchSelectQuery);
    }
    updateById(customer) {
        const uuid = customer.uuid;
        delete customer.createdAt;
        delete customer.uuid;
        customer.updatedAt = new Date().toISOString();
        const updateQuery = this.queryBuilder.buildUpdate(this.tableName, customer, uuid);
        this.logger.info(updateQuery);
        return this.postgresService.runSQL(this.tableName, updateQuery);
    }
    deleteById(uuid) {
        const deleteQuery = this.queryBuilder.buildDelete(this.tableName, uuid);
        this.logger.info(deleteQuery);
        return this.postgresService.runSQL(this.tableName, deleteQuery);
    }
    getTodayBirthdays() {
        throw new Error('Method not implemented.');
    }
};
exports.CustomersProvider = CustomersProvider;
exports.CustomersProvider = CustomersProvider = __decorate([
    (0, common_1.Injectable)()
], CustomersProvider);
//# sourceMappingURL=customers.provider.js.map