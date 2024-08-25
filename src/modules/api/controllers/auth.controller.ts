import { Controller, Post, Get, Req, Res, Body, Inject } from '@nestjs/common';
import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';
import { AuthProviderInterface } from 'src/modules/auth/interface/auth.interface';
import { AuthProcessor } from 'src/modules/auth/processor/auth.processor';
import { UserDTO } from '../dto/user.dto';
import { UserBuilder } from 'src/modules/auth/model/user.builder';

@Controller('auth')
export class AuthController extends GenericController {
  constructor(
    @Inject('AuthProviderInterface')
    private readonly authProvider: AuthProviderInterface,
  ) {
    super();
  }

  private authProcessor = new AuthProcessor(this.authProvider);

  @Post('/login')
  login(
    @Body() userDTO: UserDTO,
    @Req() req: Request,
    @Res() res: Response,
  ): any {
    const user = new UserBuilder()
      .withUserName(userDTO.username)
      .withPassword(userDTO.password)
      .build();

    const result = this.authProcessor.getToken(user);

    return this.resolveResponse(req, res, result);
  }

  @Get('/user')
  user(@Req() req: Request, @Res() res: Response): any {
    return this.resolveResponse(
      req,
      res,
      Promise.resolve('Buscando Dados do Usuário'),
    );
  }
}
