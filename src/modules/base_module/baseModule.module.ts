import { Module } from '@nestjs/common';
import { BaseModuleController } from '../api/controllers/basemodule.controller';
import { BaseModuleProvider } from 'src/providers/basemodule.provider';

@Module({
  imports: [],
  controllers: [BaseModuleController],
  providers: [
    {
      provide: 'BaseModuleProviderInterface',
      useClass: BaseModuleProvider,
    },
  ],
})
export class BaseModuleModule {}
