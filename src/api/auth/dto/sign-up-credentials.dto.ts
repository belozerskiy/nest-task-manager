import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignUpCredentialsDto {
  @ApiProperty()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(50)
  password: string;
}
