import { Module } from '@nestjs/common';
import { TasksModule } from 'src/graphql/tasks/tasks.module';

@Module({
  imports: [TasksModule],
})
export class GraphqlModule {}
