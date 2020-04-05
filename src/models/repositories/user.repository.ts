import * as bcrypt from 'bcrypt/bcrypt.js';

import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

import { UserEntity } from '../entities/user.entity';
import { Repository, EntityRepository } from 'typeorm';
import { SignUpCredentialsDto } from '../../api/auth/dto/sign-up-credentials.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async signUp(signUpCredentials: SignUpCredentialsDto): Promise<void> {
    const { username, password } = signUpCredentials;
    const hash = await this.hashPassword(password);
    const user = new UserEntity(username, hash);
    try {
      await user.save();
    } catch (error) {
      if (error.code == 23505) {
        throw new ConflictException('This user already exist');
      }
      throw new InternalServerErrorException();
    }
  }

  async validateUserPassword(signInCredentials: SignUpCredentialsDto) {
    const { username, password } = signInCredentials;
    const user: UserEntity = await this.findOne({ username });
    if (user && (await user.validatePassword(password))) {
      return user;
    }
    return null;
  }

  private async hashPassword(password: string) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    return hash;
  }
}
