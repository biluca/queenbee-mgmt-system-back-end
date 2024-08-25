import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { AuthProviderInterface } from '../interface/auth.interface';
import { User } from '../model/user.model';
export declare class AuthProcessor extends GenericProcessor {
    private readonly authProvider;
    constructor(authProvider: AuthProviderInterface);
    getToken(user: User): Promise<any>;
}
