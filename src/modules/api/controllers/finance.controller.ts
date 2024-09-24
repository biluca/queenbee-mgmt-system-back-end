import {
  Controller,
  Body,
  Param,
  Query,
  Get,
  Post,
  Patch,
  Delete,
  Inject,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CRUDController } from 'src/common/interfaces/crudController.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { FinanceProviderInterface } from 'src/modules/finance/interface/finanance.interface';
import { FinanceBuilder } from 'src/modules/finance/model/finance.builder';
import { FinanceProcessor } from 'src/modules/finance/processor/finance.processor';
import { FinanceDTO } from '../dto/finance.dto';
import { FinanceUpdateDTO } from '../dto/financeUpdate.dto';

@Controller('finance')
export class FinanceController
  extends GenericController
  implements CRUDController
{
  constructor(
    @Inject('FinanceProviderInterface')
    private readonly financeProvider: FinanceProviderInterface &
      CRUDProviderInterface,
  ) {
    super();
  }

  private financeProcessor = new FinanceProcessor(this.financeProvider);

  @Post('/')
  create(
    @Body() financeDTO: FinanceDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const finance = new FinanceBuilder()
      .withItem(financeDTO.item)
      .withValue(financeDTO.value)
      .withPaymentType(financeDTO.payment_type)
      .withFinanceType(financeDTO.finance_type)
      .withCategory(financeDTO.category)
      .withPaymentDate(financeDTO.payment_date)
      .withNotes(financeDTO.notes)
      .build();

    const result = this.financeProcessor.create(finance);
    return this.resolveResponse(req, res, result);
  }

  @Get('/')
  getAll(@Req() req: Request, @Res() res: Response): Promise<any> {
    const result = this.financeProcessor.getAll();
    return this.resolveResponse(req, res, result);
  }

  @Get(':uuid')
  getById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.financeProcessor.getById(uuid);
    return this.resolveResponse(req, res, result);
  }

  @Get('/filter')
  getByFilters(
    @Query() filters: any,
    req: Request,
    res: Response,
  ): Promise<any> {
    const result = this.financeProcessor.getByFilters(filters);
    return this.resolveResponse(req, res, result);
  }

  @Get('/search')
  getBySearch(
    @Query() search: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.financeProcessor.getBySearch(search);
    return this.resolveResponse(req, res, result);
  }

  @Patch()
  updateById(
    @Body() financeUpdateDTO: FinanceUpdateDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const finance = new FinanceBuilder()
      .withUuid(financeUpdateDTO.uuid)
      .withItem(financeUpdateDTO.item)
      .withValue(financeUpdateDTO.value)
      .withPaymentType(financeUpdateDTO.payment_type)
      .withFinanceType(financeUpdateDTO.finance_type)
      .withCategory(financeUpdateDTO.category)
      .withPaymentDate(financeUpdateDTO.payment_date)
      .withNotes(financeUpdateDTO.notes)
      .build();

    const result = this.financeProcessor.updateById(finance);
    return this.resolveResponse(req, res, result);
  }

  @Delete(':uuid')
  deleteById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.financeProcessor.deleteById(uuid);
    return this.resolveResponse(req, res, result);
  }
}
