import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { CRUDController } from 'src/common/interfaces/crudController.interface';
import { CRUDProviderInterface } from 'src/common/interfaces/crudProvider.interface';
import { AppointmentProviderInterface } from 'src/modules/appointments/interface/appointment.interface';
export declare class AppointmentController extends GenericController implements CRUDController {
    private readonly appointmentProvider;
    constructor(appointmentProvider: AppointmentProviderInterface & CRUDProviderInterface);
    private AppointmentProcessor;
    create(object: any, req: Request, res: Response): Promise<any>;
    getAll(req: Request, res: Response): Promise<any>;
    getById(uuid: string, req: Request, res: Response): Promise<any>;
    getByFilters(filters: any, req: Request, res: Response): Promise<any>;
    getBySearch(search: any, req: Request, res: Response): Promise<any>;
    updateById(object: any, req: Request, res: Response): Promise<any>;
    deleteById(uuid: string, req: Request, res: Response): Promise<any>;
}
