import { Injectable } from '@nestjs/common';
import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { BaseModuleProviderInterface } from '../interface/basemodule.interface';

@Injectable()
export class BaseModuleProcessor extends GenericProcessor {
  constructor(
    private readonly baseModuleProvider: BaseModuleProviderInterface,
  ) {
    super();
  }

  getSampleFunction() {
    return this.baseModuleProvider.getSampleFunction();
  }
}
