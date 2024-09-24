import { Injectable } from '@nestjs/common';
import { GenericService } from 'src/common/genericService.commons';

@Injectable()
export class BaseModuleService extends GenericService {
  getSampleFunction() {
    return Promise.resolve('BASE MODULE SERVICE ON!');
  }
}
