import { CustomLogger } from './customLogger.commons';

export abstract class GenericProvider {
  logger = new CustomLogger();
}
