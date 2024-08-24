import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProvider } from 'src/common/interfaces/crudProvider.interface';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
import { Customer } from 'src/modules/customers/model/customer.model';
export declare class CustomersProvider extends GenericProvider implements CustomersProviderInterface, CRUDProvider {
    private readonly postgresService;
    private readonly queryBuilder;
    private readonly tableName;
    create(customer: Customer): Promise<any>;
    getAll(): Promise<any>;
    getById(uuid: string): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    updateById(customer: Customer): Promise<any>;
    deleteById(uuid: string): Promise<any>;
    getTodayBirthdays(): Promise<any>;
}
