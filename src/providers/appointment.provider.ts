import { Injectable } from '@nestjs/common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';

@Injectable()
export class AppointmentProvider
  extends GenericProvider
  implements AppointmentProviderInterface, CRUDProviderInterface
{
  create(object: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getByFilters(filters: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getBySearch(search: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getById(uuid: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateById(object: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteById(uuid: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
