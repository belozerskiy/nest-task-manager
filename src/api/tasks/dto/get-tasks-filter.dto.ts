import { TaskStatus } from 'src/models/entities/task-status.enum';
import { IsOptional, IsEnum, IsNotEmpty, IsInt } from 'class-validator';
import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetTasksFilterDto {
  @Field({ nullable: true })
  @IsOptional()
  @IsEnum(TaskStatus)
  search: string;

  @Field({ nullable: true })
  @Field(() => TaskStatus)
  @IsOptional()
  @IsNotEmpty()
  status: TaskStatus;

  @Field(() => Int)
  @IsOptional()
  @IsInt()
  skip = 0;

  @Field(() => Int)
  @IsOptional()
  @IsInt()
  limit = 10;
}
