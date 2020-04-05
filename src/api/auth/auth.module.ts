import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JWTStrategy } from './jwt.strategy';
import { ModelsModule } from 'src/models/models.module';

@Module({
  imports: [
    ModelsModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: 'secret',
      signOptions: {
        expiresIn: '60s',
      },
    }),
  ],
  providers: [AuthService, JWTStrategy],
  exports: [JWTStrategy, PassportModule],
  controllers: [AuthController],
})
export class AuthModule {}
