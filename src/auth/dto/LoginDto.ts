import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ description: 'Email of the user',example:"john@gmail.com" })
  @IsNotEmpty()
  @IsEmail({}, { message: 'Please enter correct email' })
  readonly email: string;

  @ApiProperty({ description: 'password',example:"123456" })
  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  readonly password: string;
}
