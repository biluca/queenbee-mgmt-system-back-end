import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { FinanceProviderInterface } from '../interface/finanance.interface';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
export declare class FinanceProcessor extends GenericProcessor implements CRUDProcessor {
    private readonly financeProvider;
    constructor(financeProvider: FinanceProviderInterface & CRUDProviderInterface);
    create(object: any): Promise<any>;
    getAll(): Promise<any>;
    getById(uuid: string): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    updateById(object: any): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
