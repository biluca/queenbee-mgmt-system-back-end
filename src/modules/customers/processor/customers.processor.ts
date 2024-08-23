import { Injectable } from '@nestjs/common';
import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { CustomersProviderInterface } from '../interface/customers.interface';
//import { GenericError } from 'src/commons/model/genericError.model';

@Injectable()
export class CustomersProcessor extends GenericProcessor {
  constructor(private readonly customersProvider: CustomersProviderInterface) {
    super();
  }

  async process(): Promise<any> {
    this.logger.info(`Got into the CustomersProcessor.process()`);

    return this.customersProvider.getTodayBirthdays();
  }
}
