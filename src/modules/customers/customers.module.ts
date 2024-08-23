import { Module } from '@nestjs/common';
import { CustomersProvider } from 'src/providers/customers.provider';
import { CustomersController } from '../api/controllers/customers.controller';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [
    {
      provide: 'CustomersProviderInterface',
      useClass: CustomersProvider,
    },
  ],
})
export class CustomersModule {}
