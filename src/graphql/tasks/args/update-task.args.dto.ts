import { TaskStatus } from '../../../models/entities/task-status.enum';
import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class UpdateTaskArgsDto {
  @Field(() => ID)
  id: number;

  @Field(() => TaskStatus)
  status: TaskStatus;
}
