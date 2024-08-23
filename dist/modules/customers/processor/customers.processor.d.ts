import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { CustomersProviderInterface } from '../interface/customers.interface';
export declare class CustomersProcessor extends GenericProcessor {
    private readonly customersProvider;
    constructor(customersProvider: CustomersProviderInterface);
    process(): Promise<any>;
}
