import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UsePipes,
  ValidationPipe,
  Query,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';

import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatusValidationPipe } from './pipe/task-status-validation.pipe';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskEntity } from 'src/models/entities/task.entity';
import { TaskStatus } from 'src/models/entities/task-status.enum';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  @UseGuards(AuthGuard())
  @UsePipes(ValidationPipe)
  createTask(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get()
  getTasks(
    @Query(ValidationPipe) tasksFilter: GetTasksFilterDto,
  ): Promise<TaskEntity[]> {
    if (Object.keys(tasksFilter).length) {
      return this.tasksService.getFilteredTasks(tasksFilter);
    }
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<TaskEntity> {
    return this.tasksService.getTaskById(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteTaskById(
    @Param('id', ParseIntPipe)
    id: number,
  ): Promise<void> {
    return this.tasksService.deleteTaskById(id);
  }

  @Patch(':id/status')
  @UseGuards(AuthGuard())
  updateTaskStatus(
    @Param('id') id: number,
    @Body('status', TaskStatusValidationPipe) status: TaskStatus,
  ): Promise<TaskEntity> {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
