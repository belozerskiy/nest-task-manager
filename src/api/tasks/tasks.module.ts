import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { AuthModule } from 'src/api/auth/auth.module';
import { ModelsModule } from 'src/models/models.module';

@Module({
  imports: [ModelsModule, AuthModule],
  exports: [TasksService],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
