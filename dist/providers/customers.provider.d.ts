import { GenericProvider } from 'src/common/genericProvider.commons';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
export declare class CustomersProvider extends GenericProvider implements CustomersProviderInterface {
    todayBirthdays: {
        name: string;
        age: number;
        gender: string;
        profile_photo: string;
    }[];
    getTodayBirthdays(): Promise<any>;
}
