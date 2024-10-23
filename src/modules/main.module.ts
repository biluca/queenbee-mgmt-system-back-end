import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorizatorMiddleware } from 'src/middleware/authorizator.middleware';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule.forRoot(), ApiModule, DataBaseModule],
  controllers: [],
  providers: [],
})
export class MainModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthorizatorMiddleware)
      .exclude(
        { path: '/auth/login', method: RequestMethod.ALL },
        { path: '/auth/user', method: RequestMethod.ALL },
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
