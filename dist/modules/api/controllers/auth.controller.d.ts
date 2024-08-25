import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { AuthProviderInterface } from 'src/modules/auth/interface/auth.interface';
import { UserDTO } from '../dto/user.dto';
export declare class AuthController extends GenericController {
    private readonly authProvider;
    constructor(authProvider: AuthProviderInterface);
    private authProcessor;
    login(userDTO: UserDTO, req: Request, res: Response): any;
    user(req: Request, res: Response): any;
}
