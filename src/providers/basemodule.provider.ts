import { Injectable } from '@nestjs/common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { BaseModuleProviderInterface } from 'src/modules/base_module/interface/basemodule.interface';
import { BaseModuleService } from 'src/services/basemodule.service';

@Injectable()
export class BaseModuleProvider
  extends GenericProvider
  implements BaseModuleProviderInterface
{
  private readonly baseModuleService = new BaseModuleService();

  getSampleFunction(): Promise<any> {
    return this.baseModuleService.getSampleFunction();
  }
}
