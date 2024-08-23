import { Controller, Get, Inject, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
import { CustomersProcessor } from 'src/modules/customers/processor/customers.processor';

@Controller()
export class CustomersController extends GenericController {
  constructor(
    @Inject('CustomersProviderInterface')
    private readonly customersProvider: CustomersProviderInterface,
  ) {
    super();
  }

  private customersProcessor = new CustomersProcessor(this.customersProvider);

  @Get('/birthdays')
  get(@Req() req: Request, @Res() res: Response): any {
    const result = this.customersProcessor.process();

    return this.resolveResponse(req, res, result);
  }
}
