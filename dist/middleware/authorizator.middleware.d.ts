import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class AuthorizatorMiddleware implements NestMiddleware {
    private readonly logger;
    private readonly authService;
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
    resolveResponse(req: Request, res: Response, result: Promise<any>): any;
}
