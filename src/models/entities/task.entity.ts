import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';

registerEnumType(TaskStatus, {
  name: 'TaskStatus',
});

@ObjectType()
@Entity()
export class TaskEntity extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.OPEN,
  })
  status: TaskStatus;

  constructor(title, description) {
    super();
    this.title = title;
    this.description = description;
  }
}
