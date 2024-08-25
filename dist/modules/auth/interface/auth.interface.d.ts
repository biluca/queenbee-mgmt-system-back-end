import { User } from '../model/user.model';
export interface AuthProviderInterface {
    getToken(user: User): Promise<any>;
}
