import { Repository, EntityRepository, DeleteResult } from 'typeorm';
import { TaskEntity } from '../entities/task.entity';
import { CreateTaskDto } from '../../api/tasks/dto/create-task.dto';
import { GetTasksFilterDto } from '../../api/tasks/dto/get-tasks-filter.dto';

@EntityRepository(TaskEntity)
export class TaskRepository extends Repository<TaskEntity> {
  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { title, description } = createTaskDto;
    const task = new TaskEntity(title, description);
    await this.save(task);
    return task;
  }

  async findTasksByFilter(
    tasksFilter: GetTasksFilterDto,
  ): Promise<TaskEntity[]> {
    const { status, search, skip, limit } = tasksFilter;

    let tasks: TaskEntity[] = [];
    const query = this.createQueryBuilder();

    if (status) {
      query.andWhere('status = :status', { status });
    }

    if (search) {
      query.andWhere(
        'LOWER(title) LIKE :search OR LOWER(description) LIKE :search',
        { search: `%${search.toLowerCase()}%` },
      );
    }

    query
      .orderBy('id', 'DESC')
      .skip(skip)
      .take(limit);

    tasks = await query.getMany();
    return tasks;
  }

  async deleteById(id: number): Promise<DeleteResult> {
    const result = await this.createQueryBuilder()
      .delete()
      .whereInIds(id)
      .returning('*')
      .execute();

    return result;
  }
}
