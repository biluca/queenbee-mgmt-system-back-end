"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresService = void 0;
const common_1 = require("@nestjs/common");
const pg_1 = require("pg");
const genericService_commons_1 = require("../common/genericService.commons");
let PostgresService = class PostgresService extends genericService_commons_1.GenericService {
    async runSQL(table, sql) {
        this.logger.info(`Got into PostgresService.runSQL()`);
        const myPool = await this.getPool();
        const queryResult = await myPool.query(sql);
        return this.resolveResult(queryResult, table);
    }
    async getPool() {
        const pool = new pg_1.Pool({
            connectionString: process.env.POSTGRES_URL,
        });
        return pool;
    }
    resolveResult(result, table) {
        if (!result) {
            return {};
        }
        if (result['command'] == 'SELECT') {
            if (result['rowCount'] == 1) {
                return result['rows'][0];
            }
            return result['rows'];
        }
        if (result['command'] == 'INSERT') {
            return {
                message: `Data Created on Table: ${table}`,
            };
        }
        if (result['command'] == 'DELETE') {
            return {
                message: `Data Deleted from Table: ${table}`,
            };
        }
        if (result['command'] == 'UPDATE') {
            return {
                message: `Data Updated on Table: ${table}`,
            };
        }
    }
};
exports.PostgresService = PostgresService;
exports.PostgresService = PostgresService = __decorate([
    (0, common_1.Injectable)()
], PostgresService);
//# sourceMappingURL=postgres.service.js.map