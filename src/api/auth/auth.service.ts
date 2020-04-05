import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../models/repositories/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { SignUpCredentialsDto } from './dto/sign-up-credentials.dto';
import { UserEntity } from '../../models/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { JWTResponse } from './interfaces/jwt-reponse';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  signUp(signUpCredentials: SignUpCredentialsDto): Promise<void> {
    return this.userRepository.signUp(signUpCredentials);
  }

  async validateUser(
    signInCredentials: SignUpCredentialsDto,
  ): Promise<JWTResponse> {
    const user: UserEntity = await this.userRepository.validateUserPassword(
      signInCredentials,
    );

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.getAccessToken(user);
  }

  private getAccessToken(user: UserEntity): JWTResponse {
    const { username } = user;
    const payload: JWTPayload = { username };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }
}
