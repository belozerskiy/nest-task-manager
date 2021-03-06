import { Injectable, NotFoundException, Inject } from '@nestjs/common';

import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskEntity } from '../../models/entities/task.entity';
import { DeleteResult } from 'typeorm';
import { TaskStatus } from '../../models/entities/task-status.enum';
import { TaskRepository } from '../../models/repositories/task.repository';
import { orderBy } from 'lodash/fp';

@Injectable()
export class TasksService {
  constructor(private taskRepository: TaskRepository) {}

  async getFilteredTasks(
    tasksFilter: GetTasksFilterDto,
  ): Promise<TaskEntity[]> {
    return this.taskRepository.findTasksByFilter(tasksFilter);
  }

  async getAllTasks(): Promise<TaskEntity[]> {
    return this.taskRepository.find({ order: { id: 'DESC' } });
  }

  async getTaskById(id: number): Promise<TaskEntity> {
    const found = await this.taskRepository.findOne(id);
    if (!found) throw new NotFoundException(`Task with ID "${id}" not found`);
    return found;
  }

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async deleteTaskById(id: number): Promise<TaskEntity> {
    const result: DeleteResult = await this.taskRepository.deleteById(id);
    if (!result.affected) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
    return result.raw[0] as TaskEntity;
  }

  async updateTaskStatus(id: number, status: TaskStatus): Promise<TaskEntity> {
    const task: TaskEntity = await this.getTaskById(id);
    task.status = status;
    await task.save();
    return task;
  }
}
