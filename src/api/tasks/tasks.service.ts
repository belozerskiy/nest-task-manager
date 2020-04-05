import { Injectable, NotFoundException, Inject } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskEntity } from '../../models/entities/task.entity';
import { DeleteResult } from 'typeorm';
import { TaskStatus } from '../../models/entities/task-status.enum';
import { TaskRepository } from '../../models/repositories/task.repository';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  async getFilteredTasks(
    tasksFilter: GetTasksFilterDto,
  ): Promise<TaskEntity[]> {
    return this.taskRepository.findTasksByFilter(tasksFilter);
  }

  getAllTasks(): Promise<TaskEntity[]> {
    return this.taskRepository.find();
  }

  async getTaskById(id: number): Promise<TaskEntity> {
    const found = await this.taskRepository.findOne(id);
    if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTaskById(id: number): Promise<void> {
    const result: DeleteResult = await this.taskRepository.delete(id);
    if (!result.affected) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<TaskEntity> {
    const task: TaskEntity = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }
}
