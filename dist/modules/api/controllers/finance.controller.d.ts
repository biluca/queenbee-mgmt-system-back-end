import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CRUDController } from 'src/common/interfaces/crudController.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { FinanceProviderInterface } from 'src/modules/finance/interface/finanance.interface';
import { FinanceDTO } from '../dto/finance.dto';
import { FinanceUpdateDTO } from '../dto/financeUpdate.dto';
export declare class FinanceController extends GenericController implements CRUDController {
    private readonly financeProvider;
    constructor(financeProvider: FinanceProviderInterface & CRUDProviderInterface);
    private financeProcessor;
    create(financeDTO: FinanceDTO, req: Request, res: Response): Promise<any>;
    getAll(req: Request, res: Response): Promise<any>;
    getById(uuid: string, req: Request, res: Response): Promise<any>;
    getByFilters(filters: any, req: Request, res: Response): Promise<any>;
    getBySearch(search: any, req: Request, res: Response): Promise<any>;
    updateById(financeUpdateDTO: FinanceUpdateDTO, req: Request, res: Response): Promise<any>;
    deleteById(uuid: string, req: Request, res: Response): Promise<any>;
}
