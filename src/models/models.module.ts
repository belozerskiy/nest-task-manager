import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskRepository } from './repositories/task.repository';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TaskRepository, UserRepository])],
  exports: [TypeOrmModule],
})
export class ModelsModule {}
