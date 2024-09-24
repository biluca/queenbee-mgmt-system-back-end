import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { FinanceProviderInterface } from 'src/modules/finance/interface/finanance.interface';
import { Finance } from 'src/modules/finance/model/finance.model';
export declare class FinanceProvider extends GenericProvider implements FinanceProviderInterface, CRUDProviderInterface {
    private readonly postgresService;
    private readonly queryBuilder;
    private readonly tableName;
    create(finance: any): Promise<any>;
    getAll(): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    getById(uuid: string): Promise<any>;
    updateById(finance: Finance): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
