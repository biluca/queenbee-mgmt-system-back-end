import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
export declare class AppController extends GenericController {
    getHealthCheck(req: Request, res: Response): any;
    get(req: Request, res: Response): any;
}
