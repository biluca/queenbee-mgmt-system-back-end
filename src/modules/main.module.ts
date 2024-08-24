import { Module } from '@nestjs/common';
import { ApiModule } from './api/controllers/api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ApiModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
