import { IsNotEmpty } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class CreateTaskArgsDto {
  @Field()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsNotEmpty()
  description: string;
}
