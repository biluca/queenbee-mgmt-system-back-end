import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { GenericController } from 'src/common/genericController.commons';

@Controller()
export class AppController extends GenericController {
  @Get('/health-check')
  get(@Req() req: Request, @Res() res: Response): any {
    return this.resolveResponse(req, res, Promise.resolve('Hello'));
  }
}
