import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ApiModule } from './api/controllers/api.module';
import { ConfigModule } from '@nestjs/config';
import { AuthorizatorMiddleware } from 'src/middleware/authorizator.middleware';

@Module({
  imports: [ConfigModule.forRoot(), ApiModule],
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
