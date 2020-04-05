import { UserEntity } from '../../models/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from '../../models/repositories/user.repository';
import { PassportStrategy, AuthGuard } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { UnauthorizedException, Injectable } from '@nestjs/common';

@Injectable()
export class JWTStrategy extends AuthGuard('jwt') {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret',
    });
  }

  async validate(payload: JWTPayload): Promise<UserEntity> {
    const { username } = payload;
    const user = await this.userRepository.findOne({ username });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
