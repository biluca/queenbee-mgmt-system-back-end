import { LoggerService } from '@nestjs/common';
export declare class CustomLogger implements LoggerService {
    log(message: string): void;
    info(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
}
