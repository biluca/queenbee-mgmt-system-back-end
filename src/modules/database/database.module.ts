import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentDTO } from '../api/dto/appointment.dto';
import { AppointmentEntity } from './model/appoinment.entity';

@Module({
    imports: [
      TypeOrmModule.forRoot({
        type: "postgres",
        host: process.env.POSTGRES_HOST,
        port: 5432,
        username:  process.env.POSTGRES_USER,
        password:  process.env.POSTGRES_PASSWORD,
        database:  process.env.POSTGRES_DATABASE,
        synchronize: true,
        autoLoadEntities: true,
        retryAttempts: 5
      }),
    ],
  })
export class DataBaseModule { }
