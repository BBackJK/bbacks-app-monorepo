import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { CommonEntity } from '@common/entity/common.entity';

@Entity()
export class Diary extends CommonEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  iconUrl: string;
  @Column({ nullable: true })
  weather: string;
  @Column({ type: 'longtext' })
  contents: string;

  // 따로 관계 안맺고 비즈니스로직에서 다 처리할거임.
  @Column({ nullable: true })
  userId: string;
}
