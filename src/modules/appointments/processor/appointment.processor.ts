import { Injectable } from '@nestjs/common';
import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { AppointmentProviderInterface } from '../interface/appointment.interface';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';

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
  create(object: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getAll(): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getById(uuid: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getByFilters(filters: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  getBySearch(search: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  updateById(object: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
  deleteById(uuid: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
