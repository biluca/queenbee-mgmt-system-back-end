import { Injectable } from '@nestjs/common';
import { JWTPayload, SignJWT, jwtVerify } from 'jose';
import { GenericService } from 'src/common/genericService.commons';
import { User } from 'src/modules/auth/model/user.model';
import { PostgresService } from './postgres.service';
import { QueryBuilder } from 'src/common/database/queryBuilder.common';
import { GenericError } from 'src/common/model/genericError.model';

@Injectable()
export class AuthService extends GenericService {
  accessKeySecret = process.env.ACCESS_KEY_SECRET;
  encodedKey = new TextEncoder().encode(this.accessKeySecret);

  private readonly postgresService = new PostgresService();
  private readonly queryBuilder = new QueryBuilder();

  async getToken(user: User): Promise<any> {
    const foundUser = await this.verifyUser(user);

    const sixHours = 6 * 60 * 60 * 1000;
    const createdAt = new Date(Date.now());
    const expiresAt = new Date(Date.now() + sixHours);
    const token = await this.generateSignedToken({
      ...foundUser,
      expiresAt,
      createdAt,
    });

    this.logger.info(token);

    return Promise.resolve({ token: token });
  }

  private async verifyUser(user: User) {
    const table = 'users';
    const filters = { username: user.username };

    const findUserQuery = this.queryBuilder.buildFilteredSelect(table, filters);

    const foundUser = await this.postgresService.runSQL(table, findUserQuery);

    if (!foundUser['username']) {
      throw new GenericError(404, 'Usuário Não Encontrado!');
    }

    const foundPassword = foundUser['password'];
    const userPassword = user.password;
    if (foundPassword != userPassword) {
      throw new GenericError(500, 'Senha Inválida!');
    }

    delete foundUser.password;
    return foundUser;
  }

  async verifyToken(token: string) {
    try {
      const { payload } = await jwtVerify(token, this.encodedKey, {
        algorithms: ['HS256'],
      });
      return payload;
    } catch (error) {
      throw new GenericError(403, 'Eror on Verifiyng Token');
    }
  }

  private async generateSignedToken(payload: JWTPayload) {
    return new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('6h')
      .sign(this.encodedKey);
  }
}
