import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
export declare class CustomersController extends GenericController {
    private readonly customersProvider;
    constructor(customersProvider: CustomersProviderInterface);
    private customersProcessor;
    get(req: Request, res: Response): any;
}
