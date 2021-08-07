import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '@common/entity/common.entity';

@Entity()
export class Calendar extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'longtext' })
  contents: string;
  @Column()
  startDt: string;
  @Column()
  endDt: string;
  @Column({ nullable: true })
  color: string;
  @Column({ nullable: true })
  textColor: string;

  // 따로 관계 안맺고 비즈니스로직에서 다 처리할거임.
  @Column({ nullable: true })
  userId: string;
}
