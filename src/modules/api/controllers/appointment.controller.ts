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
import { AppointmentDTO } from '../dto/appointment.dto';
import { AppointmentBuilder } from 'src/modules/appointments/model/appointment.builder';
import { AppointmentUpdateDTO } from '../dto/appointmentUpdate.dto';

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

  private appointmentProcessor = new AppointmentProcessor(
    this.appointmentProvider,
  );

  @Post()
  create(
    @Body() appoitmentDTO: AppointmentDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const appointment = new AppointmentBuilder()
      .withCustomerUuid(appoitmentDTO.customer_uuid)
      .withType(appoitmentDTO.type)
      .withDate(appoitmentDTO.date)
      .withHour(appoitmentDTO.hour)
      .withStatus(appoitmentDTO.status)
      .withPaymentStatus(appoitmentDTO.payment_status)
      .build();

    const result = this.appointmentProcessor.create(appointment);

    return this.resolveResponse(req, res, result);
  }

  @Get()
  getAll(@Req() req: Request, @Res() res: Response): Promise<any> {
    const result = this.appointmentProcessor.getAll();

    return this.resolveResponse(req, res, result);
  }

  @Get(':uuid')
  getById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.appointmentProcessor.getById(uuid);

    return this.resolveResponse(req, res, result);
  }

  @Get('filter')
  getByFilters(
    @Query() filters: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.appointmentProcessor.getByFilters(filters);

    return this.resolveResponse(req, res, result);
  }

  @Get('search')
  getBySearch(
    @Query() search: any,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.appointmentProcessor.getBySearch(search);

    return this.resolveResponse(req, res, result);
  }

  @Patch()
  updateById(
    @Body() appoitmentUpdateDTO: AppointmentUpdateDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const appointment = new AppointmentBuilder()
      .withUuid(appoitmentUpdateDTO.uuid)
      .withCustomerUuid(appoitmentUpdateDTO.customer_uuid)
      .withType(appoitmentUpdateDTO.type)
      .withDate(appoitmentUpdateDTO.date)
      .withHour(appoitmentUpdateDTO.hour)
      .withStatus(appoitmentUpdateDTO.status)
      .withPaymentStatus(appoitmentUpdateDTO.payment_status)
      .build();

    const result = this.appointmentProcessor.updateById(appointment);

    return this.resolveResponse(req, res, result);
  }

  @Delete(':uuid')
  deleteById(
    @Param('uuid') uuid: string,
    @Req() req: Request,
    @Res() res: Response,
  ): Promise<any> {
    const result = this.appointmentProcessor.deleteById(uuid);

    return this.resolveResponse(req, res, result);
  }
}
