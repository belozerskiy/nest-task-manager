import { PipeTransform, BadRequestException } from '@nestjs/common';
import { TaskStatus } from '../../../models/entities/task-status.enum';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatuses = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: any) {
    const status = value.toUpperCase();

    if (!this.isValidStatus(status)) {
      throw new BadRequestException(`${status} is invalid value of status`);
    }

    return status;
  }

  private isValidStatus(status: any) {
    return status.length > 0 && this.allowedStatuses.includes(status);
  }
}
