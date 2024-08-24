import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { CustomersProviderInterface } from '../interface/customers.interface';
import { Customer } from '../model/customer.model';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProvider } from 'src/common/interfaces/crudProvider.interface';
export declare class CustomersProcessor extends GenericProcessor implements CRUDProcessor {
    private readonly customersProvider;
    constructor(customersProvider: CustomersProviderInterface & CRUDProvider);
    create(customer: Customer): Promise<any>;
    getAll(): Promise<any>;
    getById(uuid: string): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    updateById(customer: Customer): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
