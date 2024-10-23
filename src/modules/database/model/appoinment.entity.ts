import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { GenericEntity } from '../../../common/model/genericEntity.model';

@Entity()
export class AppointmentEntity extends GenericEntity {
  customer_uuid: string;
  
  @Column()
  type: string;

  @Column()
  date: Date;

  @Column()
  hour: string;

  @Column()
  status: string;

  @Column()
  payment_status: string;
}
