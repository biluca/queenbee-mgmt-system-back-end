import { JWTPayload } from 'jose';
import { GenericService } from 'src/common/genericService.commons';
import { User } from 'src/modules/auth/model/user.model';
export declare class AuthService extends GenericService {
    accessKeySecret: string;
    encodedKey: Uint8Array;
    private readonly postgresService;
    private readonly queryBuilder;
    getToken(user: User): Promise<any>;
    private verifyUser;
    verifyToken(token: string): Promise<JWTPayload>;
    private generateSignedToken;
}
