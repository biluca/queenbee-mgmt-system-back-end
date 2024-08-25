"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizatorMiddleware = void 0;
const common_1 = require("@nestjs/common");
const customLogger_commons_1 = require("../common/customLogger.commons");
const genericError_model_1 = require("../common/model/genericError.model");
const auth_service_1 = require("../services/auth.service");
let AuthorizatorMiddleware = class AuthorizatorMiddleware {
    constructor() {
        this.logger = new customLogger_commons_1.CustomLogger();
        this.authService = new auth_service_1.AuthService();
    }
    async use(req, res, next) {
        try {
            const headers = req.headers;
            const apiKeyHeader = headers['api-key'];
            const apiKey = process.env.API_KEY;
            if (apiKeyHeader != apiKey) {
                throw new genericError_model_1.GenericError(403, 'Non-Valid API Key [api-key]');
            }
            const authorizationHeader = headers['authorization'];
            if (!authorizationHeader) {
                throw new genericError_model_1.GenericError(403, 'Non-Valid Authorization [authorization]');
            }
            await this.authService.verifyToken(authorizationHeader);
            next();
        }
        catch (error) {
            this.resolveResponse(req, res, Promise.reject(error));
        }
    }
    resolveResponse(req, res, result) {
        return result
            .then((response) => {
            this.logger.info(`${req.url} - Returning HTTP 200`);
            return res.status(200).send(response);
        })
            .catch((error) => {
            this.logger.info(`${req.url} - Returning HTTP ${error.status}`);
            this.logger.error(`${req.url} - ${error.message}`);
            return res.status(error.status).send(error);
        });
    }
};
exports.AuthorizatorMiddleware = AuthorizatorMiddleware;
exports.AuthorizatorMiddleware = AuthorizatorMiddleware = __decorate([
    (0, common_1.Injectable)()
], AuthorizatorMiddleware);
//# sourceMappingURL=authorizator.middleware.js.map