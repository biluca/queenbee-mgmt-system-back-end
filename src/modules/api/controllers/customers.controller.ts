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
import { CustomersProviderInterface } from 'src/modules/customers/interface/customers.interface';
import { CustomersProcessor } from 'src/modules/customers/processor/customers.processor';
import { CustomerDTO } from '../dto/customer.dto';
import { CustomerBuilder } from 'src/modules/customers/model/customer.builder';
import { CRUDController } from 'src/common/interfaces/crudController.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { CustomerUpdateDTO } from '../dto/customerUpdate.dto';

@Controller('customer')
export class CustomersController
  extends GenericController
  implements CRUDController
{
  constructor(
    @Inject('CustomersProviderInterface')
    private readonly customersProvider: CustomersProviderInterface &
      CRUDProviderInterface,
  ) {
    super();
  }

  private customersProcessor = new CustomersProcessor(this.customersProvider);

  @Post('/')
  create(
    @Body() customerDTO: CustomerDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const customer = new CustomerBuilder(customerDTO.name)
      .withEmail(customerDTO.email)
      .withInstagram(customerDTO.instagram)
      .withPhoneNumber(customerDTO.phoneNumber)
      .build();

    const result = this.customersProcessor.create(customer);

    return this.resolveResponse(req, res, result);
  }

  @Get('/')
  getAll(@Req() req: Request, @Res() res: Response): Promise<any> {
    const result = this.customersProcessor.getAll();
    return this.resolveResponse(req, res, result);
  }

  @Get('/filter')
  getByFilters(
    @Query() filters: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.customersProcessor.getByFilters(filters);
    return this.resolveResponse(req, res, result);
  }

  @Get('/search')
  getBySearch(
    @Query() search: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.customersProcessor.getBySearch(search);
    return this.resolveResponse(req, res, result);
  }

  @Get(':uuid')
  getById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.customersProcessor.getById(uuid);
    return this.resolveResponse(req, res, result);
  }

  @Patch()
  updateById(
    @Body() customerUpdateDTO: CustomerUpdateDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const customer = new CustomerBuilder(customerUpdateDTO.name)
      .withUuid(customerUpdateDTO.uuid)
      .withEmail(customerUpdateDTO.email)
      .withInstagram(customerUpdateDTO.instagram)
      .withPhoneNumber(customerUpdateDTO.phoneNumber)
      .build();

    const result = this.customersProcessor.updateById(customer);
    return this.resolveResponse(req, res, result);
  }
  @Delete(':id')
  deleteById(
    @Param('id') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.customersProcessor.deleteById(uuid);
    return this.resolveResponse(req, res, result);
  }
}
