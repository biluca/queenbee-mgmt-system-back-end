import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomersModule } from 'src/modules/customers/customers.module';
import { AuthModule } from 'src/modules/auth/auth.module';

@Module({
  imports: [CustomersModule, AuthModule],
  controllers: [AppController],
  providers: [],
})
export class ApiModule {}
