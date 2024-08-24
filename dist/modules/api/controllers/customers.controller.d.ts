import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
import { CustomerDTO } from '../dto/customer.dto';
import { CRUDController } from 'src/common/interfaces/crudController.interface';
import { CRUDProvider } from 'src/common/interfaces/crudProvider.interface';
import { CustomerUpdateDTO } from '../dto/customerUpdate.dto';
export declare class CustomersController extends GenericController implements CRUDController {
    private readonly customersProvider;
    constructor(customersProvider: CustomersProviderInterface & CRUDProvider);
    private customersProcessor;
    create(customerDTO: CustomerDTO, req: Request, res: Response): Promise<any>;
    getAll(req: Request, res: Response): Promise<any>;
    getByFilters(filters: any, req: Request, res: Response): Promise<any>;
    getBySearch(search: any, req: Request, res: Response): Promise<any>;
    getById(uuid: string, req: Request, res: Response): Promise<any>;
    updateById(customerUpdateDTO: CustomerUpdateDTO, req: Request, res: Response): Promise<any>;
    deleteById(uuid: string, req: Request, res: Response): Promise<any>;
}
