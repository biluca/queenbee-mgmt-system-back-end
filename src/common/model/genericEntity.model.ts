import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GenericEntity {
  @PrimaryGeneratedColumn()
  uuid: string;

  @Column()
  createdAt: string;
  
  @Column()
  updatedAt: string;

  constructor() {
    this.uuid = uuid();
    this.createdAt = new Date().toISOString();
  }
}
