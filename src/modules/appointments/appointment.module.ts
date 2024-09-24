import { Module } from '@nestjs/common';
import { AppointmentController } from '../api/controllers/appointment.controller';
import { AppointmentProvider } from 'src/providers/appointment.provider';

@Module({
  imports: [],
  controllers: [AppointmentController],
  providers: [
    {
      provide: 'AppointmentProviderInterface',
      useClass: AppointmentProvider,
    },
  ],
})
export class AppointmentModule {}
