import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';
import { Appointment } from 'src/modules/appointments/model/appointment.model';
export declare class AppointmentProvider extends GenericProvider implements AppointmentProviderInterface, CRUDProviderInterface {
    private readonly postgresService;
    private readonly queryBuilder;
    private readonly tableName;
    create(appointment: Appointment): Promise<any>;
    getAll(): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    getById(uuid: string): Promise<any>;
    updateById(appointment: Appointment): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
