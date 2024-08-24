import { Injectable } from '@nestjs/common';
import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { CustomersProviderInterface } from '../interface/customers.interface';
import { Customer } from '../model/customer.model';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProvider } from 'src/common/interfaces/crudProvider.interface';

@Injectable()
export class CustomersProcessor
  extends GenericProcessor
  implements CRUDProcessor
{
  constructor(
    private readonly customersProvider: CustomersProviderInterface &
      CRUDProvider,
  ) {
    super();
  }
  create(customer: Customer): Promise<any> {
    return this.customersProvider.create(customer);
  }
  getAll(): Promise<any> {
    return this.customersProvider.getAll();
  }
  getById(uuid: string): Promise<any> {
    return this.customersProvider.getById(uuid);
  }
  getByFilters(filters: any): Promise<any> {
    return this.customersProvider.getByFilters(filters);
  }
  getBySearch(search: any): Promise<any> {
    return this.customersProvider.getBySearch(search);
  }
  updateById(customer: Customer): Promise<any> {
    return this.customersProvider.updateById(customer);
  }
  deleteById(uuid: string): Promise<any> {
    return this.customersProvider.deleteById(uuid);
  }
}
