import { Injectable } from '@nestjs/common';
import { GenericProvider } from 'src/common/genericProvider.commons';
import { AuthProviderInterface } from 'src/modules/auth/interface/auth.interface';
import { User } from 'src/modules/auth/model/user.model';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthProvider
  extends GenericProvider
  implements AuthProviderInterface
{
  private readonly authService = new AuthService();

  getToken(user: User): Promise<any> {
    return this.authService.getToken(user);
  }
}
