import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CustomersModule } from 'src/modules/customers/customers.module';
import { AuthModule } from 'src/modules/auth/auth.module';
import { FinanceModule } from 'src/modules/finance/baseModule.module';
import { AppointmentModule } from '../appointments/appointment.module';

@Module({
  imports: [CustomersModule, AuthModule, FinanceModule, AppointmentModule],
  controllers: [AppController],
  providers: [],
})
export class ApiModule {}
