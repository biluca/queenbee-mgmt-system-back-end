import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomersModule } from 'src/modules/customers/customers.module';

@Module({
  imports: [CustomersModule],
  controllers: [AppController],
  providers: [],
})
export class ApiModule {}
