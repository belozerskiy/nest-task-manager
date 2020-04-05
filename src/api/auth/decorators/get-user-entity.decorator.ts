import { createParamDecorator } from '@nestjs/common';
import { UserEntity } from '../../../models/entities/user.entity';

export const GetUserEntity = createParamDecorator(
  (_, context): UserEntity => {
    const request = context.switchToHttp().getRequest();
    return request.user;
  },
);
