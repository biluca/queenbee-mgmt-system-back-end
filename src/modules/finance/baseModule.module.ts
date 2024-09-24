import { Module } from '@nestjs/common';
import { FinanceController } from '../api/controllers/finance.controller';
import { FinanceProvider } from 'src/providers/finance.provider';

@Module({
  imports: [],
  controllers: [FinanceController],
  providers: [
    {
      provide: 'FinanceProviderInterface',
      useClass: FinanceProvider,
    },
  ],
})
export class FinanceModule {}
