import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CustomLogger } from 'src/common/customLogger.commons';
import { GenericError } from 'src/common/model/genericError.model';
import { AuthService } from 'src/services/auth.service';

@Injectable()
export class AuthorizatorMiddleware implements NestMiddleware {
  private readonly logger = new CustomLogger();
  private readonly authService = new AuthService();

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const headers = req.headers;

      const apiKeyHeader = headers['api-key'];
      const apiKey = process.env.API_KEY;
      if (apiKeyHeader != apiKey) {
        throw new GenericError(403, 'Non-Valid API Key [api-key]');
      }

      const authorizationHeader = headers['authorization'];
      if (!authorizationHeader) {
        throw new GenericError(403, 'Non-Valid Authorization [authorization]');
      }

      await this.authService.verifyToken(authorizationHeader);

      next();
    } catch (error) {
      this.resolveResponse(req, res, Promise.reject(error));
    }
  }

  resolveResponse(req: Request, res: Response, result: Promise<any>): any {
    return result
      .then((response) => {
        this.logger.info(`${req.url} - Returning HTTP 200`);
        return res.status(200).send(response);
      })
      .catch((error) => {
        this.logger.info(`${req.url} - Returning HTTP ${error.status}`);
        this.logger.error(`${req.url} - ${error.message}`);
        return res.status(error.status).send(error);
      });
  }
}
