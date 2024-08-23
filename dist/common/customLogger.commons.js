"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLogger = void 0;
const common_1 = require("@nestjs/common");
const winston = require("winston");
const { combine, colorize, timestamp, align, printf } = winston.format;
const alignedWithColorsAndTime = combine(colorize(), timestamp(), align(), printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
const logger = winston.createLogger({
    level: process.env.LOG_LEVEL || 'info',
    format: alignedWithColorsAndTime,
    transports: [new winston.transports.Console()],
});
let CustomLogger = class CustomLogger {
    log(message) {
        logger.info(message);
    }
    info(message) {
        logger.info(message);
    }
    error(message) {
        logger.error(message);
    }
    warn(message) {
        logger.warn(message);
    }
    debug(message) {
        logger.debug(message);
    }
};
exports.CustomLogger = CustomLogger;
exports.CustomLogger = CustomLogger = __decorate([
    (0, common_1.Injectable)()
], CustomLogger);
//# sourceMappingURL=customLogger.commons.js.map