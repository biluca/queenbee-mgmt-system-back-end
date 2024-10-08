import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CRUDController } from 'src/common/interfaces/crudController.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';
import { AppointmentDTO } from '../dto/appointment.dto';
import { AppointmentUpdateDTO } from '../dto/appointmentUpdate.dto';
export declare class AppointmentController extends GenericController implements CRUDController {
    private readonly appointmentProvider;
    constructor(appointmentProvider: AppointmentProviderInterface & CRUDProviderInterface);
    private appointmentProcessor;
    create(appoitmentDTO: AppointmentDTO, req: Request, res: Response): Promise<any>;
    getAll(req: Request, res: Response): Promise<any>;
    getById(uuid: string, req: Request, res: Response): Promise<any>;
    getByFilters(filters: any, req: Request, res: Response): Promise<any>;
    getBySearch(search: any, req: Request, res: Response): Promise<any>;
    updateById(appoitmentUpdateDTO: AppointmentUpdateDTO, req: Request, res: Response): Promise<any>;
    deleteById(uuid: string, req: Request, res: Response): Promise<any>;
}
