import { Module } from '@nestjs/common';
import { ApiModule } from './api/controllers/api.module';

@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
