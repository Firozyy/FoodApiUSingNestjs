import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';





export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsBoolean()
    IsAdmin: boolean;
}
