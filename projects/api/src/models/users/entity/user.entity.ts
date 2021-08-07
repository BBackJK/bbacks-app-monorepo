import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '@common/entity/common.entity';

@Entity()
export class User extends CommonEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  phone: string;
}
