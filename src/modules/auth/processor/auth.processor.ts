import { GenericProcessor } from 'src/common/genericProcessor.commons';
import { AuthProviderInterface } from '../interface/auth.interface';
import { Injectable } from '@nestjs/common';
import { User } from '../model/user.model';

@Injectable()
export class AuthProcessor extends GenericProcessor {
  constructor(private readonly authProvider: AuthProviderInterface) {
    super();
  }

  getToken(user: User): Promise<any> {
    return this.authProvider.getToken(user);
  }
}
