import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';
export declare class AppointmentProvider extends GenericProvider implements AppointmentProviderInterface, CRUDProviderInterface {
    create(object: any): Promise<any>;
    getAll(): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    getById(uuid: string): Promise<any>;
    updateById(object: any): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
