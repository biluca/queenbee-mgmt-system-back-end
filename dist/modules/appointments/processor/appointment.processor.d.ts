import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { AppointmentProviderInterface } from '../interface/appointment.interface';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { Appointment } from '../model/appointment.model';
export declare class AppointmentProcessor extends GenericProcessor implements CRUDProcessor {
    private readonly appointmentProvider;
    constructor(appointmentProvider: AppointmentProviderInterface & CRUDProviderInterface);
    create(appointment: Appointment): Promise<any>;
    getAll(): Promise<any>;
    getById(uuid: string): Promise<any>;
    getByFilters(filters: any): Promise<any>;
    getBySearch(search: any): Promise<any>;
    updateById(appointment: Appointment): Promise<any>;
    deleteById(uuid: string): Promise<any>;
}
