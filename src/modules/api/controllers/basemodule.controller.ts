import {
  Controller,
  //Body,
  //Param,
  //Query,
  Get,
  //Post,
  //Patch,
  //Delete,
  Inject,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { BaseModuleProviderInterface } from 'src/modules/base_module/interface/basemodule.interface';
import { BaseModuleProcessor } from 'src/modules/base_module/processor/basemodule.processor';

@Controller('basemodule')
export class BaseModuleController extends GenericController {
  constructor(
    @Inject('BaseModuleProviderInterface')
    private readonly baseModuleProvider: BaseModuleProviderInterface,
  ) {
    super();
  }

  private baseModuleProcessor = new BaseModuleProcessor(
    this.baseModuleProvider,
  );

  @Get()
  get(@Req() req: Request, @Res() res: Response): any {
    const result = this.baseModuleProcessor.getSampleFunction();
    return this.resolveResponse(req, res, result);
  }
}
