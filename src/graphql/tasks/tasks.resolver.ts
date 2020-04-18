import { TasksService } from '../../api/tasks/tasks.service';
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetTasksFilterDto } from '../../api/tasks/dto/get-tasks-filter.dto';
import { UpdateTaskArgsDto } from './args/update-task.args.dto';
import { CreateTaskArgsDto } from './args/create-task-args.dto';
import { TaskEntity } from 'src/models/entities/task.entity';
import { DeleteTaskAgrsDto } from './args/delete-task-args.dto';

@Resolver(() => TaskEntity)
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [TaskEntity])
  async getTasks(
    @Args() tasksFilter: GetTasksFilterDto,
  ): Promise<TaskEntity[]> {
    // if (Object.keys(tasksFilter).length) {
    return this.tasksService.getFilteredTasks(tasksFilter);
    // }
    // return this.tasksService.getAllTasks();
  }

  @Query(() => TaskEntity)
  getTask(@Args('id') id: number): Promise<TaskEntity> {
    return this.tasksService.getTaskById(id);
  }

  @Mutation(() => TaskEntity)
  updateTaskStatus(
    @Args() updateTaskArgs: UpdateTaskArgsDto,
  ): Promise<TaskEntity> {
    const { id, status } = updateTaskArgs;
    return this.tasksService.updateTaskStatus(id, status);
  }

  @Mutation(() => TaskEntity)
  createTask(@Args() createTaskDto: CreateTaskArgsDto): Promise<TaskEntity> {
    return this.tasksService.createTask(createTaskDto);
  }

  @Mutation(() => TaskEntity)
  deleteTask(@Args() deleteTaskDtro: DeleteTaskAgrsDto): Promise<TaskEntity> {
    return this.tasksService.deleteTaskById(deleteTaskDtro.id);
  }
}
