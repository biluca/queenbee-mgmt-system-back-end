import { Injectable } from '@nestjs/common';
import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { AppointmentProviderInterface } from '../interface/appointment.interface';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { Appointment } from '../model/appointment.model';

@Injectable()
export class AppointmentProcessor
  extends GenericProcessor
  implements CRUDProcessor
{
  constructor(
    private readonly appointmentProvider: AppointmentProviderInterface &
      CRUDProviderInterface,
  ) {
    super();
  }
  create(appointment: Appointment): Promise<any> {
    return this.appointmentProvider.create(appointment);
  }
  getAll(): Promise<any> {
    return this.appointmentProvider.getAll();
  }
  getById(uuid: string): Promise<any> {
    return this.appointmentProvider.getById(uuid);
  }
  getByFilters(filters: any): Promise<any> {
    return this.appointmentProvider.getByFilters(filters);
  }
  getBySearch(search: any): Promise<any> {
    return this.appointmentProvider.getBySearch(search);
  }
  updateById(appointment: Appointment): Promise<any> {
    return this.appointmentProvider.updateById(appointment);
  }
  deleteById(uuid: string): Promise<any> {
    return this.appointmentProvider.deleteById(uuid);
  }
}
