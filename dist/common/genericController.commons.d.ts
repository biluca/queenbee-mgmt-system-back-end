import { Response, Request } from 'express';
import { CustomLogger } from './customLogger.commons';
export declare abstract class GenericController {
    logger: CustomLogger;
    resolveResponse(req: Request, res: Response, result: Promise<any>): any;
}
