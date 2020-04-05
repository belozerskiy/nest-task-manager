import { Controller, Body, ValidationPipe, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpCredentialsDto } from './dto/sign-up-credentials.dto';
import { JWTResponse } from './interfaces/jwt-reponse';
import { ApiTags, ApiResponse } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created.',
  })
  async signUp(
    @Body(ValidationPipe) signUpCredentials: SignUpCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(signUpCredentials);
  }

  @Post('signin')
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully authorized and get jwttoken.',
  })
  async signIn(
    @Body(ValidationPipe) signInCredentials: SignUpCredentialsDto,
  ): Promise<JWTResponse> {
    return this.authService.validateUser(signInCredentials);
  }
}
