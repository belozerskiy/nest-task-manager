import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from 'src/api/tasks/tasks.service';
import { ModelsModule } from 'src/models/models.module';

@Module({
  imports: [ModelsModule],
  providers: [TasksService, TasksResolver],
})
export class TasksModule {}
