import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { BaseModuleProviderInterface } from 'src/modules/base_module/interface/basemodule.interface';
export declare class BaseModuleController extends GenericController {
    private readonly baseModuleProvider;
    constructor(baseModuleProvider: BaseModuleProviderInterface);
    private baseModuleProcessor;
    get(req: Request, res: Response): any;
}
