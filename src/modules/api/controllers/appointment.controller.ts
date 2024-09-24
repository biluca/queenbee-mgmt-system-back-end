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
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';
import { AppointmentProcessor } from 'src/modules/appointments/processor/appointment.processor';

@Controller('appointment')
export class AppointmentController
  extends GenericController
  implements CRUDController
{
  constructor(
    @Inject('AppointmentProviderInterface')
    private readonly appointmentProvider: AppointmentProviderInterface &
      CRUDProviderInterface,
  ) {
    super();
  }

  private AppointmentProcessor = new AppointmentProcessor(
    this.appointmentProvider,
  );

  @Post()
  create(object: any, @Req() req: Request, @Res() res: Response): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Get()
  getAll(@Req() req: Request, @Res() res: Response): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Get(':uuid')
  getById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Get('filter')
  getByFilters(
    @Query() filters: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Get('search')
  getBySearch(
    @Query() search: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Patch()
  updateById(
    object: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }

  @Delete(':uuid')
  deleteById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
