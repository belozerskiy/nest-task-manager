import { TaskStatus } from '../../../models/entities/task-status.enum';
import { IsOptional, IsEnum, IsNotEmpty } from 'class-validator';
import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetTasksFilterDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(TaskStatus)
  search: string;

  @Field({ nullable: true })
  @Field(type => TaskStatus)
  @IsOptional()
  @IsNotEmpty()
  status: TaskStatus;
}
