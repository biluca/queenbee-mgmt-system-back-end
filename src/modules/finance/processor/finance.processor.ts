import { Injectable } from '@nestjs/common';
import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { FinanceProviderInterface } from '../interface/finanance.interface';
import { CRUDProcessor } from 'src/common/interfaces/crudProcessor.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';

@Injectable()
export class FinanceProcessor
  extends GenericProcessor
  implements CRUDProcessor
{
  constructor(
    private readonly financeProvider: FinanceProviderInterface &
      CRUDProviderInterface,
  ) {
    super();
  }
  create(object: any): Promise<any> {
    return this.financeProvider.create(object);
  }
  getAll(): Promise<any> {
    return this.financeProvider.getAll();
  }
  getById(uuid: string): Promise<any> {
    return this.financeProvider.getById(uuid);
  }
  getByFilters(filters: any): Promise<any> {
    return this.financeProvider.getByFilters(filters);
  }
  getBySearch(search: any): Promise<any> {
    return this.financeProvider.getBySearch(search);
  }
  updateById(object: any): Promise<any> {
    return this.financeProvider.updateById(object);
  }
  deleteById(uuid: string): Promise<any> {
    return this.financeProvider.deleteById(uuid);
  }
}
