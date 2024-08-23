import { CustomLogger } from './customLogger.commons';

export abstract class GenericService {
  logger = new CustomLogger();
}
