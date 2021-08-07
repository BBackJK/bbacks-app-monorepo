import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonEntity {
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  createdBy: string;
  @UpdateDateColumn()
  updatedAt: Date;
  @Column()
  updatedBy: string;
  @Column({ nullable: true })
  deletedAt: Date;
  @Column({ nullable: true })
  deletedBy: string;
}
