"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jose_1 = require("jose");
const genericService_commons_1 = require("../common/genericService.commons");
const postgres_service_1 = require("./postgres.service");
const queryBuilder_common_1 = require("../common/database/queryBuilder.common");
const genericError_model_1 = require("../common/model/genericError.model");
let AuthService = class AuthService extends genericService_commons_1.GenericService {
    constructor() {
        super(...arguments);
        this.accessKeySecret = process.env.ACCESS_KEY_SECRET;
        this.encodedKey = new TextEncoder().encode(this.accessKeySecret);
        this.postgresService = new postgres_service_1.PostgresService();
        this.queryBuilder = new queryBuilder_common_1.QueryBuilder();
    }
    async getToken(user) {
        const foundUser = await this.verifyUser(user);
        const sixHours = 6 * 60 * 60 * 1000;
        const createdAt = new Date(Date.now());
        const expiresAt = new Date(Date.now() + sixHours);
        const token = await this.generateSignedToken({
            ...foundUser,
            expiresAt,
            createdAt,
        });
        this.logger.info(token);
        return Promise.resolve({ token: token });
    }
    async verifyUser(user) {
        const table = 'users';
        const filters = { username: user.username };
        const findUserQuery = this.queryBuilder.buildFilteredSelect(table, filters);
        const foundUser = await this.postgresService.runSQL(table, findUserQuery);
        if (!foundUser['username']) {
            throw new genericError_model_1.GenericError(404, 'Usuário Não Encontrado!');
        }
        const foundPassword = foundUser['password'];
        const userPassword = user.password;
        if (foundPassword != userPassword) {
            throw new genericError_model_1.GenericError(500, 'Senha Inválida!');
        }
        delete foundUser.password;
        return foundUser;
    }
    async verifyToken(token) {
        try {
            const { payload } = await (0, jose_1.jwtVerify)(token, this.encodedKey, {
                algorithms: ['HS256'],
            });
            return payload;
        }
        catch (error) {
            throw new genericError_model_1.GenericError(403, 'Eror on Verifiyng Token');
        }
    }
    async generateSignedToken(payload) {
        return new jose_1.SignJWT(payload)
            .setProtectedHeader({ alg: 'HS256' })
            .setIssuedAt()
            .setExpirationTime('6h')
            .sign(this.encodedKey);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map