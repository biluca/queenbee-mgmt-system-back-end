import { GenericProvider } from 'src/common/genericProvider.commons';
import { AuthProviderInterface } from 'src/modules/auth/interface/auth.interface';
import { User } from 'src/modules/auth/model/user.model';
export declare class AuthProvider extends GenericProvider implements AuthProviderInterface {
    private readonly authService;
    getToken(user: User): Promise<any>;
}
