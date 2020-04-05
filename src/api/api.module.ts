import { Module } from '@nestjs/common';
import { TasksModule } from 'src/api/tasks/tasks.module';
import { AuthModule } from 'src/api/auth/auth.module';

@Module({
  imports: [TasksModule, AuthModule],
})
export class ApiModule {}
