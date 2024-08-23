import { Response, Request } from 'express';
import { GenericError } from './model/genericError.model';
import { CustomLogger } from './customLogger.commons';
export abstract class GenericController {
  logger = new CustomLogger();

  resolveResponse(req: Request, res: Response, result: Promise<any>): any {
    return result
      .then((response) => {
        this.logger.info(`${req.url} - Returning HTTP 200`);
        return res.status(200).send(response);
      })
      .catch((error: GenericError) => {
        this.logger.info(`${req.url} - Returning HTTP ${error.status}`);
        this.logger.error(`${req.url} - ${error.message}`);
        return res.status(error.status).send(error);
      });
  }
}
