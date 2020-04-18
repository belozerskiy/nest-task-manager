import { ArgsType, Field, ID } from '@nestjs/graphql';

@ArgsType()
export class DeleteTaskAgrsDto {
  @Field(() => ID)
  id: number;
}
